CREATE TABLE `echo_task_type` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `echo_task_window` (
	`qualifier` text,
	`echo_task_type` text,
	`description` text,
	`applicable_start_offset` integer,
	`warning_offset` integer,
	`critical_offset` integer,
	`applicable_end_offset` integer,
	PRIMARY KEY(`echo_task_type`, `qualifier`),
	FOREIGN KEY (`echo_task_type`) REFERENCES `echo_task_type`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `echo_task_record` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`echo_task_type` text,
	`timestamp` integer,
	FOREIGN KEY (`echo_task_type`) REFERENCES `echo_task_type`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_echo_record_task_type_timestamp` ON `echo_task_record` (`echo_task_type`,`timestamp`);