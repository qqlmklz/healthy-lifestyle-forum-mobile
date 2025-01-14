import { Footer, Header } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { API } from '@/shared/api';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function EmployeePage() {
  const { id } = useLocalSearchParams();
  const [employee, setEmployee] = useState<Employee>({
    id: '',
    name: '',
    photo: '',
  });

  const fetchEmployee = async () => {
    try {
      const employeeId = Array.isArray(id) ? id[0] : id;
      if (!employeeId) throw new Error('Employee ID is not available');

      const response = await API.appBlock.getEmployee(employeeId);
      setEmployee(response.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  const imageSource =
    employee.photo.startsWith('http') || employee.photo.startsWith('/')
      ? { uri: employee.photo }
      : require('@/assets/images/example.png');

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <View className="flex-1 justify-between">
      <Header size="sm" path="Специалисты" />
      <Wrapper>
        {/* BackButton */}
        <Link href={{ pathname: '/' }} asChild>
          <Text className="mb-7">
            <Image
              source={require('@/assets/icons/backbutton.png')}
              style={{ width: 27, height: 27 }}
            />
          </Text>
        </Link>
        {/* Content */}
        <View className="flex flex-row gap-5 mb-20">
          <Image source={imageSource} style={{ width: 153, height: 195 }} />
          <View>
            <Text className="text-[16px] font-bold">{employee.name}</Text>
            {employee.role && (
              <Text className="text-[14px] text-[#757575] font-bold mb-2">{employee.role}</Text>
            )}
            {employee.desc && <Text className="text-[12px] w-[180px]">{employee.desc}</Text>}
          </View>
        </View>
        {/* Action */}
        <TouchableOpacity className="bg-[#04A8FF] rounded-[30px]">
          <Text className="text-[#FFFFFF] text-center text-[12px] font-bold uppercase py-4 px-2">
            Записаться на онлайн-тренировку
          </Text>
        </TouchableOpacity>
      </Wrapper>
      <Footer />
    </View>
  );
}
