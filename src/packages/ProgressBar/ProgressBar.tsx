import { FC } from "react";
import useClassNames from "../../hooks/useClassNames";
import { ProgressBarProps } from "./types";

const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { percent, theme, height, showText, style } = props

  const classNames = useClassNames({ compDesc: 'progress-bar__inner', theme })

  return (
    <div className='progress-bar'>
      <div className='progress-bar__outter' style={{ height: `${height}px`, ...style }}>
        <div className={classNames} style={{ width: `${percent}%` }}>
          { showText && <span className='inner-text'>{percent}%</span> }
        </div>
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  theme: 'primary',
  showText: true,
  height: 10
}

export default ProgressBar;
