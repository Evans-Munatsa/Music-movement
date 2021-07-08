import React, {useState} from 'react';
import {Formik} from 'formik';
import {View, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
// import {Colors} from './../components/styles';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon, 
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    Line,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from "./../components/styles";

//colors
const {brand, darkLight, primary} = Colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();


    // Actual value to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    };

    const showDatePicker = () => {
        setShow('date');
    };

    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/music-logo.png')}/>
                <PageTitle> Music Movement</PageTitle>
                <SubTitle>Sign Up</SubTitle>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    style={{
                        backgroundColor: 'yellow',
                    }}
                    />
                )}


                <Formik 
                    initialValues={{ name: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }} 
                    onSubmit={(values) => {
                    console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="Full Name"
                            placeholder="John Doe"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            icon="person"
                            />
                            <MyTextInput
                            label="Email Address"
                            placeholder="mail@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            icon="mail"
                                        />
                            <MyTextInput
                            label="Date of Birth"
                            placeholder="DD / MM / YYYY"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            icon="calendar"
                            editable={false}
                            isDate={true}
                            showDatePicker={showDatePicker}
                            />
                            <MyTextInput
                            label="Password"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            icon="lock"
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <MyTextInput
                            label="Confirm Password"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            icon="lock"
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <MsgBox type={messageType}>{message}</MsgBox>
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>Signup</ButtonText>
                                    </StyledButton>
                                    <Line />

                                    <StyledButton onPress={handleSubmit} google={true}>
                                        <Fontisto name="google" size={25} color={primary} />
                                        <ButtonText google={true}>Sign Up with Google</ButtonText>
                                    </StyledButton>

                                    <ExtraView>
                                        <ExtraText>Already have an account? </ExtraText>
                                        <TextLink onPress={() => navigation.navigate('Signup')}>
                                            <TextLinkContent>Login</TextLinkContent>
                                        </TextLink>
                                    </ExtraView>
                    </StyledFormArea>
                )}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        
        {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
            <StyledTextInput {...props} />
            </TouchableOpacity>
        )}
        {!isDate && <StyledTextInput {...props} />}

        {isPassword && (
          <RightIcon
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
          </RightIcon>
        )}
      </View>
    );
  };
  

export default Signup