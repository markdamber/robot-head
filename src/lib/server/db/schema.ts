import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// all times are minutes since 4AM

export const echoTaskType = sqliteTable('echo_task_type', {
	id: text('id').primaryKey(),
	description: text('description')
});

export const echoTaskWindow = sqliteTable('echo_task_window', {
	qualifier: text('qualifier'),
	echoTaskType: text('echoTaskType').references(() => echoTaskType.id),
	description: text('description'),
	applicableStartMinutesAfter4am: integer('applicable_start_offset'),
	warningMinutesAfter4am: integer('warning_offset'),
	criticalMinutesAfter4am: integer('critical_offset'),
	applicableEndMinutesAfter4am: integer('applicable_end_offset'),

});

export const echoTaskRecord = sqliteTable('echo_task_record', {
	echoTaskType: text('echoTaskType').references(() => echoTaskType.id),
	timestamp: integer('timestamp'),
})