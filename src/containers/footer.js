import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">우리들의 이야기</Footer.Link>
                    <Footer.Link href="#">고객</Footer.Link>
                    <Footer.Link href="#">시제품</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>채용</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">대한민국</Footer.Link>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">中国</Footer.Link>
                    <Footer.Link href="#">日本の</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social(준비중)</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}