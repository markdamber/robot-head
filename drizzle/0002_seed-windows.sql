-- Custom SQL migration file, put your code below! --
INSERT INTO echo_task_window (
  qualifier,
  echo_task_type,
  description,
  applicable_start_offset,
  warning_offset,
  critical_offset,
  applicable_end_offset
) VALUES
  ('morning', 'feed', 'breakfast', 120, 240, 300, 480),
  ('am', 'meds', 'morning dose', 120, 360, 600, 780),
  ('daily', 'poop', 'anytime', 0, 360, 480, 1439),
  ('evening', 'feed', 'dinner', 600, 750, 810, 780),
  ('night', 'dental', 'night treat', 990, 1110, 1170, 120);
