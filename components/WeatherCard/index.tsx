import Image from 'next/image';
import { Properties, Period } from '../../interfaces/Weather';
import { ReactElement } from 'react';

type PropertiesProp = Pick<Properties, 'periods'>;

export function WeatherCard({ periods }: PropertiesProp): ReactElement {
  return (
    <div className="grid grid-cols-6 gap-4">
      {periods.slice(0, 12).map((period: Period) => (
        <div key={period.number}>
          <div className="bg-slate-700 flex flex-col flex-1 w-full items-center justify-center text-xs">
            <div className="flex flex-row flex-1">
              {period.startTime && period.startTime.toString()}
            </div>
            <div>{period.endTime && period.endTime.toString()}</div>
            <Image
              src={`${period.icon}`}
              alt="weather image"
              width={56}
              height={56}
            />
            <div>
              {period.temperature} {period.temperatureUnit}
            </div>
            <div>{period.shortForecast}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
