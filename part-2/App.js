function App() {
  return (
    <div>
      <Tweet username="u1" name="Test1" message="Hello World." date= {new Date().toString()}/>
      <Tweet username="u2" name="Someone else" message="Very cool app!" date= {new Date().toString()} />
      <Tweet username="u3" name="Another person" message="Woohoo!" date= {new Date().toString()} />
    </div>
  );
}