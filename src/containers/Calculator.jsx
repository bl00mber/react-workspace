import { connect } from 'react-redux';

import CalculatorComponent from '@/components/Calculator';
import { setCelsius, setFahrenheit } from '@/store/actions';

const mapStateToProps = state => ({
  scale: state.temperatures.scale,
  celsius: state.temperatures.celsius,
  fahrenheit: state.temperatures.fahrenheit,
});

const mapDispatchToProps = dispatch => ({
  onCelsiusChange: temperature => dispatch(setCelsius(temperature)),
  onFahrenheitChange: temperature => dispatch(setFahrenheit(temperature)),
});

const Calculator = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculatorComponent);

export default Calculator;
