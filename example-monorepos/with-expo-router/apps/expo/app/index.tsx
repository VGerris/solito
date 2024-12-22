import { HomeScreen } from 'app/features/home/screen'
import { Logs } from 'expo'

Logs.disableExpoCliLogging();
export default function Home() {
  return <HomeScreen />
}
