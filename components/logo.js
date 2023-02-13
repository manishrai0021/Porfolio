import Link from 'next/link'
import TopLogo from './icons/TopLogo'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

> svg {
    tansition: 200ms ease;
}

&:hover > svg {
    transform: rotate(20deg);
}
`
const Logo = () => {
    return (
        <Link href="/">
                <LogoBox>
                    <TopLogo/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLus Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                        Manish Kumar Rai
                        >
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo