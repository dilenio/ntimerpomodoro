import React from 'react';
import { Container, LinearGradientStyled, Title } from './styles';

import MuteButton from '../../components/MuteButton';
import ScheduleButton from '../../components/ScheduleButton';
import Timer from '../../components/Timer';
import PlayStopToggleButton from '../../components/PlayStopToggleButton';
import PomodoroJobs from '../../components/PomodoroJobs/index';

const Home: React.FC = () => {
  return (
    <Container>
      <LinearGradientStyled>
        <MuteButton />
        <Title>Pomodoro</Title>
        <ScheduleButton />
        <Timer />
        <PomodoroJobs />
        <PlayStopToggleButton />
      </LinearGradientStyled>
    </Container>
  );
};

export default Home;
