import { API } from '@/shared/api';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { StaffButton } from '../StaffButton';
import { Title } from '../Title';

export const StaffList: FC = () => {
  const [staff, setStaff] = useState<Staff>([]); // Состояние для хранения данных

  const fetchStaff = async () => {
    try {
      const response = await API.appBlock.getStaff();
      setStaff(response.data); // Обновляем состояние с полученными данными
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    staff && (
      <View>
        <Title>Наши специалисты</Title>
        <View className="flex justify-center items-center mb-12">
          {staff.map((employee) => (
            <StaffButton
              key={employee.id}
              handlePress={() => {}}
              name={employee.name}
              photo={employee.photo}
            />
          ))}
        </View>
      </View>
    )
  );
};
