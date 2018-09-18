import { Todo } from '@mynamespace/components';
import { getTodos } from '@mynamespace/services';
import * as React from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props { }

interface State {
  loading: boolean;
  data?: Todo[];
  error?: Error;
}

type CombinedProps = Props;

class App extends React.Component<CombinedProps, State> {

  state: State = {
    loading: true,
  };

  componentDidMount() {
    getTodos()
      .then(response => {
        this.setState({ loading: false, data: response });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  }

  render() {
    const { data, error, loading } = this.state;

    if (error) {
      return this.renderError(error);
    }

    if (loading) {
      return this.renderLoading();
    }

    if (data) {
      return this.renderTodos(data);
    }

    return null;
  }

  renderError = (error: Error) => <div>Something bad happened!</div>;

  renderLoading = () => <div>Loading...</div>;

  renderTodos = (data: Todo[]) =>
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>userId</td>
          <td>title</td>
          <td>completed</td>
        </tr>
      </thead>
      <tbody>
        {data.map(Todo)}
      </tbody>
    </table>;
}

export default App;
