import React from 'react'
import SmartFactoryWrapper from '../components/SmartFactoryWrapper'
import {
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Shield,
  User,
  AlertCircle,
  FileCheck,
  CheckCircle,
} from 'lucide-react'

const sectionIcon = (Icon: React.ElementType) => (
  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
    <Icon className="w-4 h-4 text-indigo-600" />
  </div>
)

const sectionTitle = (text: string) => (
  <h2 className="text-lg sm:text-xl font-bold text-indigo-900">{text}</h2>
)

const contentBox = 'bg-[#f8f9fc] rounded-lg p-4 sm:p-6 border border-slate-200'

const TermsOfService: React.FC = () => {
  return (
    <SmartFactoryWrapper>
      <div className="flex flex-col absolute inset-0 p-2 overflow-auto bg-[#f8f9fc] animate-in slide-in-from-bottom-4 fade-in duration-500 min-h-0">
        {/* 헤더 */}
        <div className="relative bg-white border border-indigo-100 rounded-xl px-4 py-3 mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <h2 className="text-indigo-900 font-bold text-lg tracking-tight">이용약관</h2>
              <p className="text-slate-500 text-[11px] mt-0.5">디컴소프트 AI 한글 에디터 서비스 이용약관 · 시행일 2025.01.01</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              v1.0 · 2025.01.01
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full pb-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-8 space-y-8 shadow-sm">
            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(FileText)}
                {sectionTitle('제1조 (목적)')}
              </div>
              <div className={contentBox}>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  이 약관은 디컴소프트(이하 "회사")가 운영하는 AI 한글 에디터 서비스 웹사이트(http://decomsoft.com)에서 제공하는
                  AI 기반 문서 편집 소프트웨어 및 관련 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(User)}
                {sectionTitle('제2조 (정의)')}
              </div>
              <div className={contentBox}>
                <p className="text-slate-700 mb-4 text-sm sm:text-base">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                <div className="space-y-3">
                  {[
                    ['"웹사이트"', '회사가 AI 한글 에디터 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 서비스를 제공할 수 있도록 설정한 가상의 영업장'],
                    ['"이용자"', '회사의 웹사이트에 접속하여 이 약관에 따라 회사가 제공하는 AI 한글 에디터 서비스를 받는 회원 및 비회원'],
                    ['"회원"', '회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 AI 한글 에디터 서비스를 계속적으로 이용할 수 있는 자'],
                    ['"AI 한글 에디터 서비스"', '회사가 제공하는 AI 기반 문서 편집 시스템으로 PDF 변환, 워터마크 제거, 한글 OCR 텍스트 인식 및 편집, 이미지 편집 등의 기능을 제공하는 소프트웨어 및 관련 서비스'],
                  ].map(([term, desc], i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                      <h3 className="font-semibold text-indigo-900 mb-2 text-sm">{i + 1}. {term}</h3>
                      <p className="text-slate-600 text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Calendar)}
                {sectionTitle('제3조 (약관의 명시와 설명 및 개정)')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 약관의 명시</h3>
                  <p className="text-slate-600 text-sm">회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호·모사전송번호·전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자 등을 이용자가 쉽게 알 수 있도록 웹사이트의 초기 서비스화면에 게시합니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 약관의 개정</h3>
                  <p className="text-slate-600 text-sm">회사는 「약관의 규제에 관한 법률」, 「전자상거래 등에서의 소비자보호에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">③ 개정 공지</h3>
                  <p className="text-slate-600 text-sm">회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 웹사이트의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(CheckCircle)}
                {sectionTitle('제4조 (서비스의 제공 및 변경)')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 제공 서비스</h3>
                  <p className="text-slate-600 text-sm mb-3">회사는 다음과 같은 업무를 수행합니다.</p>
                  <ul className="space-y-2">
                    {[
                      'AI 기반 한글 텍스트 인식(OCR) 및 편집 서비스 제공',
                      'PDF 문서 이미지 변환 및 워터마크 제거 서비스',
                      '이미지 편집 도구 제공',
                      '사용자 기술 지원 및 고객 서비스',
                      '시스템 유지보수 및 업데이트',
                      '기타 회사가 정하는 관련 업무',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 shrink-0" />
                        <span className="text-slate-600 text-sm">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 서비스 변경</h3>
                  <p className="text-slate-600 text-sm">회사는 소프트웨어의 업그레이드 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 서비스의 내용을 변경할 수 있습니다. 이 경우에는 변경된 서비스의 내용 및 제공일자를 명시하여 현재의 서비스 내용을 게시한 곳에 즉시 공지합니다.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(User)}
                {sectionTitle('제5조 (회원가입)')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 가입 신청</h3>
                  <p className="text-slate-600 text-sm">이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 가입 승낙</h3>
                  <p className="text-slate-600 text-sm">회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>
                  <ul className="mt-2 space-y-1">
                    {[
                      '가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우',
                      '등록 내용에 허위, 기재누락, 오기가 있는 경우',
                      '기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 shrink-0" />
                        <span className="text-slate-500 text-sm">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Shield)}
                {sectionTitle('제9조 (개인정보보호)')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 개인정보 수집</h3>
                  <p className="text-slate-600 text-sm">회사는 AI 한글 에디터 서비스 제공을 위해 필요한 최소한의 개인정보를 수집합니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 개인정보 보호</h3>
                  <p className="text-slate-600 text-sm">회사는 개인정보보호법에 따라 이용자의 개인정보를 보호하며, 개인정보처리방침에 따라 개인정보를 처리합니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">③ 개인정보 제3자 제공</h3>
                  <p className="text-slate-600 text-sm">회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 법령에 의해 요구되는 경우는 예외로 합니다.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(AlertCircle)}
                {sectionTitle('제11조 (면책조항)')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 천재지변 등</h3>
                  <p className="text-slate-600 text-sm">회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 이용자 귀책사유</h3>
                  <p className="text-slate-600 text-sm">회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">③ 무료 서비스</h3>
                  <p className="text-slate-600 text-sm">회사는 무료로 제공되는 서비스의 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(FileCheck)}
                {sectionTitle('제12조 (준거법 및 관할법원)')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 준거법</h3>
                  <p className="text-slate-600 text-sm">회사와 이용자 간에 제기된 전자상거래 소송에는 대한민국법을 적용합니다.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 관할법원</h3>
                  <p className="text-slate-600 text-sm">회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Calendar)}
                {sectionTitle('부칙')}
              </div>
              <div className={contentBox}>
                <p className="text-slate-600 text-sm">이 약관은 2025년 1월 1일부터 시행됩니다.</p>
              </div>
            </section>
          </div>

          <div className="mt-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">문의사항</h3>
              <p className="text-slate-600 mb-4 text-sm">이용약관에 대한 문의사항이 있으시면 언제든지 연락주시기 바랍니다.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm text-slate-700">010-9211-8484</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm text-slate-700">a3636a200@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm text-slate-700">대구광역시</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmartFactoryWrapper>
  )
}

export default TermsOfService
