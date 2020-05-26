export class StrategyService {
  public static evaluateStrategyValues(strategy: { [type: string]: StrategyValues }) {
    for (const strat in strategy) {
      if (strat && strategy[strat].condition) {
        return strategy[strat].confirm;
      }
    }
  }

  public static evaluateStrategyConfirmExecute(strategy: { [type: string]: StrategyConfirmExecute }) {
    for (const strat in strategy) {
      if (strat && strategy[strat].condition) {
        return strategy[strat].confirm();
      }
    }
  }


  public static evaluateStrategyConditionExecute(strategy: { [type: string]: StrategyConditionExecute }) {
    for (const strat in strategy) {
      if (strat && strategy[strat].condition()) {
        return strategy[strat].confirm;
      }
    }
  }

  public static evaluateStrategyExecutes(strategy: { [type: string]: StrategyExecutes }) {
    for (const strat in strategy) {
      if (strat && strategy[strat].condition()) {
        return strategy[strat].confirm();
      }
    }
  }
}


export interface StrategyExecutes {
  condition();
  confirm();
}

export interface StrategyConditionExecute {
  confirm;
  condition();
}

export interface StrategyConfirmExecute {
  condition;
  confirm();
}

export interface StrategyValues {
  condition;
  confirm;
}
