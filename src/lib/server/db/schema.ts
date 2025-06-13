import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('echo_task_type', {
	id: text('id').primaryKey(),
	description: text('description')
});
