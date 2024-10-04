/* import { Component } from "react"; */
import { /* connect, */ useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const showCounter = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleIncreaseByFive = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseByFive}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* 
  Példa arra hogyan kell a reduxot egy class compnenthez
  connectelni

*/
/* class CounterClass extends Component {
  toggleCounterHandler = () => {
    this.props.toggle();
  };
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.handleIncrement.bind(this)}>Increment</button>
          <button onClick={this.handleDecrement.bind(this)}>decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    toggle: () => dispatch({ type: "reset" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass); */
