import Content from './content';
import { CityProps } from '../custom-types';

export default function City({ loading, error, data }: CityProps) {
    // return (<div>TEST</div>)
    return (<Content loading={loading} error={error} data={data?.city} />);
}
