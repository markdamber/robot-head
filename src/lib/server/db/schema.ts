import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';

// all times are minutes since 4AM

export const echoTaskType = sqliteTable('echo_task_type', {
	id: text('id').primaryKey(),
	description: text('description')
});

export const echoTaskWindow = sqliteTable("echo_task_window", {
	qualifier: text("qualifier").primaryKey(),
	echoTaskType: text("echo_task_type").primaryKey(),
	description: text("description"),
	applicableStartOffset: integer("applicable_start_offset"),
	warningOffset: integer("warning_offset"),
	criticalOffset: integer("critical_offset"),
	applicableEndOffset: integer("applicable_end_offset"),
},
(table) => {
	return {
		pk: primaryKey({ columns: [table.qualifier, table.echoTaskType], name: "echo_task_window_qualifier_echo_task_type_pk"}),
	}
});


export const echoTaskRecord = sqliteTable("echo_task_record", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  echoTaskType: text('echo_task_type').references(() => echoTaskType.id),
  timestamp: integer('timestamp'),
}, (table) => [
  index("idx_echo_record_task_type_timestamp").on(table.echoTaskType, table.timestamp),
]);