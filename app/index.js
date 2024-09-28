import { StatusBar } from 'expo-status-bar';
import {  ScrollView, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from "../constants"
import CustomButton from '../components/CustomButton';

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full" backgroundColor='green'>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4">
        <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' backgroundColor="#000000"/>
        <Text className="text-3xl text-white font-bold text-center">Welcome to MatchMatch</Text>
      
      <CustomButton title="Continue with Email" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7"/>
      </View>
      
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}


