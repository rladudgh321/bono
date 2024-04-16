import Leak from './Leak';
import MainPicture from './MainPicture';

export default function MainPage() {
  return (
    <main>
      <MainPicture />
      <Leak title='누수탐지' desc='누수가 새면 탐지를 하여 일부 수리 및 전체 공사를 실시합니다' />
      <Leak title='상하수도' desc="상하수도 공사는 어렵습니다" />
    </main>
  );
}