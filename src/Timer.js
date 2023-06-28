import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Text, View} from 'react-native';

const Timer = ({restartCondition}) => {
  const [time, setTime] = useState(0);
  const timer = useRef();

  useEffect(() => {
    restartTimer();
  }, [restartCondition]);

  const startTimer = () => {
    const currentDate = new Date();
    timer.current = setInterval(() => {
      setTime(new Date() - currentDate);
    }, 1000);
    return () => clearInterval(timer.current);
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    setTime(0);
  };

  const restartTimer = () => {
    resetTimer();
    startTimer();
  };

  const changeTimeToString = numberTime => {
    if (numberTime < 10) {
      return `0${numberTime}`;
    }
    return `${numberTime}`;
  };

  return (
    <View>
      <Text
        style={{
          fontSize: ds(22),
          color: H_Colors.grey[6],
          fontWeight: 'bold',
        }}>
        {changeTimeToString(Math.floor(time / 1000 / 60))}:
        {changeTimeToString(Math.floor((time / 1000) % 60))}
      </Text>
    </View>
  );
};

export default Timer;
