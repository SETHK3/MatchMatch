import { StatusBar } from 'expo-status-bar';
import {  ScrollView, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from "../constants"
import CustomButton from '../components/CustomButton';

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary h-full" >
      <ScrollView contentContainerStyle={{ height: '100%'}}>
      <View className="w-full justify-center items-center min-h-[60vh] px-4">
        <Image source={images.logo} className="w-[200px] h-[150px] rounded-xl" resizeMode='contain' backgroundColor="green"/>
        <Text className="text-3xl text-white font-pextrabold text-center mt-5">Welcome to MatchMatch</Text>
      
      <CustomButton title="Continue with Email" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" />
      </View>
      
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}


