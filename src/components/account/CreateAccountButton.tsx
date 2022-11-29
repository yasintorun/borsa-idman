import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { COLORS } from '@utils';
import React, { useCallback, useMemo, useRef } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { IdmanButton } from '../UI/buttons';
import { CreateAccountForm } from './CreateAccountForm';

const StyledModalContainer = styled.View`
  flex: 1;
  alignItems: center;
`

export const CreateAccountButton = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['55%', '55%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <>
      <IdmanButton text='Yeni Hesap Oluştur' onPress={handlePresentModalPress} />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{
          backgroundColor: COLORS.darker
        }}
        handleIndicatorStyle={{
          backgroundColor: "#ffffff30"
        }}
      >
        <StyledModalContainer>
          <CreateAccountForm />
        </StyledModalContainer>
      </BottomSheetModal>
    </>
  )
}