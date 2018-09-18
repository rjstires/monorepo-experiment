import * as React from 'react';

interface Props {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

type CombinedProps = Props;

const Todo: React.StatelessComponent<CombinedProps> = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.userId}</td>
      <td>{props.title}</td>
      <td>{props.completed}</td>
    </tr>
  );
};

export default Todo;
