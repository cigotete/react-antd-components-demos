import {
  DemoButton,
  DemoInput,
  DemoSelect,
  DemoForm,
  DemoTable,
  DemoMessage,
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
    </>
  );
}