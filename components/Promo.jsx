import React from "react";
import Image from "next/image";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { urlFor } from "../lib/client";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 0,
  strokeWidth: 0,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="dimension">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Promo({ promoData }) {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div className="shippr__promo section__padding">
      <div className="image">
        <Image
          src={urlFor(promoData.image).url()}
          alt={promoData.smallText}
          width={1500}
          height={1000}
        />
      </div>
      <div className="content">
        <h1>
          Sales on <span className="yellow">{promoData.discount}</span> Off All
          Gadgets
        </h1>
        <div className="shippr__countdown">
          <CountdownCircleTimer
            {...timerProps}
            colors="hsl(120, 92%, 35%)"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="hsl(120, 92%, 35%)"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="hsl(120, 92%, 35%)"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("mins", getTimeMinutes(hourSeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="hsl(120, 92%, 35%)"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("secs", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>

        <div>
          <form>
            <input type="text" placeholder="Enter Email Address" />
            <button type="submit">Make Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
