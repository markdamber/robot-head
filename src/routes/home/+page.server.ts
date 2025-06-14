// src/routes/+page.server.ts
import { db } from '$lib/server/db';
import { echoTaskRecord, echoTaskType } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

import { eq, and, gte, lt } from 'drizzle-orm';

// Calculate today's time range (minutes since 4AM)
const now = new Date();
const today4AM = new Date(now);
today4AM.setHours(4, 0, 0, 0);

const tomorrow4AM = new Date(today4AM);
tomorrow4AM.setDate(tomorrow4AM.getDate() + 1);

const todayStartSeconds = Math.floor(today4AM.getTime() / 1000);
const todayEndSeconds = Math.floor(tomorrow4AM.getTime() / 1000);

export const load: PageServerLoad = async () => {
	return {
		tasks: await db
            .select({
                id: echoTaskRecord.id,
                timestamp: echoTaskRecord.timestamp,
                description: echoTaskType.description
            })
            .from(echoTaskRecord)
            .innerJoin(echoTaskType, eq(echoTaskRecord.echoTaskType, echoTaskType.id))
            .where(
                and(
                    gte(echoTaskRecord.timestamp, todayStartSeconds),
                    lt(echoTaskRecord.timestamp, todayEndSeconds)
                )
            )
            .orderBy(echoTaskRecord.timestamp)
	};
};


export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const echoTaskType = data.get('taskType');

        if (typeof echoTaskType !== 'string') {
            return fail(400, { error: 'Invalid task type' });
        }

		const timestamp = Math.floor(Date.now() / 1000);

        await db.insert(echoTaskRecord).values({
            echoTaskType,
            timestamp,
        });

		return { success: true };
	}
} satisfies Actions;