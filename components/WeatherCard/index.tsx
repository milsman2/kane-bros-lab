import { Properties, Period } from '../../interfaces/Weather';
import { ReactElement } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

type PropertiesProp = Pick<Properties, 'periods'>;

export function WeatherCard({ periods }: PropertiesProp): ReactElement {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {periods.slice(0, 12).map((period: Period) => (
        <div
          key={period.number}
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="sm:text-xs md:text-sm">
            {period.startTime &&
              formatInTimeZone(
                new Date(period.startTime),
                'America/Chicago',
                'MM-dd-yy HH:mm zzz'
              )}
          </div>
          <div className="sm:text-xs md:text-sm">
            {period.temperature} {period.temperatureUnit}
          </div>
          <div className="sm:text-xs md:text-sm">{period.shortForecast}</div>
        </div>
      ))}
    </div>
  );
}
