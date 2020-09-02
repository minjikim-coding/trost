import React, { Component } from 'react';
import Technicalitem from './Technicalitem';

export default class TechnicalList extends Component {
    render() {
        return (
            <div className="technical-research-list">
                  <Technicalitem num ="one" index="01." head="머신러닝으로 의미있는 정보찾기" text1="트로스트의 머신러닝 기술은 당신의 이야기 속에서 중요한"
                  text2=" 비언어적 단서" text3="를 찾아냅니다."
                  text4="상담학적으로 의미있는 사실, 경험, 변화의 실마리가 되는 순간 등"
                  text5=" 5개 주요반응" text6="을 통해 심리치료 효과를 높입니다." notice="※ 본 연구는 2019년 자연어처리 분야 최고 수준의 국제학술대회
                  NAACL에서 발표, 논문 게재 승인되며 기술력을 인정받았습니다." />

                  <Technicalitem num ="two" index="02." head="나도 몰랐던 내 마음을 알려주는 감정분석 솔루션" text1="트로스트의 감정분석 솔루션은 특정 상황에서 느꼈던 사람의"
                  text2=" 감정을 8개로 세분화"text3="하고 16개의 축으로
                  구분합니다."
                  text4="당신이 그 상황에 대해 어떻게 느꼈는지 차마 모르고"
                  text5=" 지나친 감정을 포착" text6="하여 심리치료에 중요한 핵심이
                  됩니다." notice=" ※ 본 연구는 2019년 자연어처리 분야 최고 수준의 국제학술대회
                  NAACL에서 발표, 논문 게재 승인되며 기술력을 인정받았습니다." />
            </div>
        )
    }
}
