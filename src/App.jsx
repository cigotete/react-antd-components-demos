import {
  DemoButton,
  DemoInput,
  DemoSelect,
  DemoForm,
  DemoTable,
  DemoMessage,
  DemoAlert,
  DemoDatePicker,
  DemoSpin,
  DemoProgress,
} from "./componentsDemo";
export function App() {

  return (
    <>
      <DemoButton />
      <DemoInput />
      <DemoSelect />
      <DemoForm />
      <DemoTable />

      <div>
        <h3>Examples of Messages</h3>
        <DemoMessage />
      </div>
      <div>
        <h3>Examples of Alert</h3>
        <DemoAlert />
      </div>
      <div>
        <h3>Examples of DatePicker</h3>
        <DemoDatePicker />
      </div>
      <div>
        <h3>Examples of Spin</h3>
        <DemoSpin />
      </div>
      <div>
        <h3>Examples of Progress</h3>
        <DemoProgress />
      </div>
    </>
  );
}