import { DatePicker, TimePicker } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(0, 8),
  disabledMinutes: () => range(4, 7),
  disabledSeconds: () => [5, 6],
});

export const DemoDatePicker = () => {

  return (
    <>
      <DatePicker />
      <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
      />
      <DatePicker.RangePicker />
      <DatePicker.WeekPicker />
      <DatePicker.MonthPicker />
      <DatePicker.YearPicker />
      <TimePicker />
      <TimePicker.RangePicker />

    </>
  );
};