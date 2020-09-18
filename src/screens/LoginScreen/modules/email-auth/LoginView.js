import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { CustomInput } from '../../../../components/core-components/CustomInput'
import { SecureTextInput } from '../../../../components/core-components/SecureTextInput'
import { PrimaryButton } from '../../../../components/core-components/PrimaryButton'
import { CustomText } from '../../../../components/core-components/CustomText'
import { LinkButton } from '../../../../components/core-components/LinkButton'
import styles from '../../../../../styles'
import i18n from 'i18n-js'

export default function LoginView ({
  navigateToPasswordReset,
  navigateToRegister,
  loginWithEmail,
  loading
}) {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email(i18n.t('enterValidEmail'))
      .required(i18n.t('enterRegisteredEmail')),
    password: Yup.string()
      .label('Password')
      .required(i18n.t('pleaseEnterPassword'))
  })

  return (
    <View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(credentials) => {
          loginWithEmail(credentials)
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          touched,
          handleBlur
        }) => (
          <>
            <CustomInput
              name="email"
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={i18n.t('emailPlaceHolder')}
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={handleBlur('email')}
              errorMessage={touched.email && errors.email}
            />

            <SecureTextInput
              value={values.password}
              placeholder={i18n.t('passwordPlaceHolder')}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              errorMessage={touched.password && errors.password}
              iconSize={24}
              iconColor={'grey'}
            />

            <LinkButton
              {...styles.forgotPassButton}
              title={i18n.t('forgotPassword')}
              onPress={navigateToPasswordReset}
            />

            <PrimaryButton
              {...styles.emailLoginButton}
              title={i18n.t('loginButtonTitle')}
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>

      <View {...styles.signUpRow}>
        <CustomText {...styles.dontHaveAccount}>
          {i18n.t('dontHaveAccount')}
        </CustomText>
        <LinkButton
          {...styles.signUpButton}
          title={i18n.t('signUp')}
          onPress={navigateToRegister}
        />
      </View>
    </View>
  )
}
