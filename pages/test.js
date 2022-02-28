import Button from '@components/Button';
import { excel } from '../utils/api';
export default function test() {
  return (
    <div>
      <Button onClick={() => excel( )} btnType='primary'>
        Download
      </Button>
    </div>
  );
}
