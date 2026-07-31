import React from 'react'
import SmartFactoryWrapper from '../components/SmartFactoryWrapper'
import {
  Cookie,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Settings,
  AlertCircle,
  Shield,
  Eye,
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

const typeBadge = (type: string) => {
  const styles: Record<string, string> = {
    '필수': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    '기능': 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    '분석': 'bg-purple-50 text-purple-700 border border-purple-200',
    '마케팅': 'bg-amber-50 text-amber-700 border border-amber-200',
  }
  return styles[type] || 'bg-slate-50 text-slate-700 border border-slate-200'
}

const CookiePolicy: React.FC = () => {
  return (
    <SmartFactoryWrapper>
      <div className="flex flex-col absolute inset-0 p-2 overflow-auto bg-[#f8f9fc] animate-in slide-in-from-bottom-4 fade-in duration-500 min-h-0">
        {/* 헤더 */}
        <div className="relative bg-white border border-indigo-100 rounded-xl px-4 py-3 mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <Cookie className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <h2 className="text-indigo-900 font-bold text-lg tracking-tight">쿠키 정책</h2>
              <p className="text-slate-500 text-[11px] mt-0.5">디컴소프트 쿠키 사용 정책 · 시행일 2025.01.01</p>
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
                {sectionIcon(Cookie)}
                {sectionTitle('1. 쿠키란 무엇인가요?')}
              </div>
              <div className={contentBox}>
                <p className="text-slate-700 mb-4 leading-relaxed text-sm sm:text-base">
                  쿠키(Cookie)는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다.
                  쿠키는 웹사이트가 사용자의 브라우저를 인식하고, 사용자의 선호도를 기억하며,
                  개인화된 경험을 제공하는 데 도움을 줍니다.
                </p>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <h3 className="font-semibold text-indigo-800 mb-2 text-sm">쿠키의 특징</h3>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• 사용자의 컴퓨터나 모바일 기기에 저장되는 작은 파일</li>
                    <li>• 웹사이트 방문 시 자동으로 생성되거나 삭제됨</li>
                    <li>• 개인정보를 직접 식별하지 않음</li>
                    <li>• 사용자가 언제든지 삭제하거나 차단할 수 있음</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Settings)}
                {sectionTitle('2. DECOMSOFT의 쿠키 사용 목적')}
              </div>
              <div className={contentBox}>
                <p className="text-slate-700 mb-4 text-sm sm:text-base">
                  디컴소프트(DECOMSOFT)는 다음과 같은 목적으로 쿠키를 사용합니다:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: '필수적 기능', items: ['서비스 로그인 상태 유지', '보안 기능 제공', '웹사이트 기본 기능 작동', '언어 설정 기억'] },
                    { title: '성능 및 분석', items: ['웹사이트 성능 모니터링', '사용자 행동 분석', '오류 진단 및 해결', 'AI 한글 에디터 서비스 개선'] },
                    { title: '개인화', items: ['맞춤형 편집 기능 제공', '사용자 선호도 기억', '편집기 설정값 저장', '대시보드 개인화'] },
                    { title: '마케팅', items: ['서비스 관련 정보 제공', '마케팅 효과 측정', '제품 업데이트 알림', '기술 세미나 정보 제공'] },
                  ].map((section, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                      <h3 className="font-semibold text-indigo-900 mb-2 text-sm">{section.title}</h3>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Eye)}
                {sectionTitle('3. 쿠키의 종류')}
              </div>
              <div className={`${contentBox} space-y-6`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-3 text-sm">지속 기간별 분류</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-slate-200 rounded-lg text-sm overflow-hidden">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">쿠키 유형</th>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">설명</th>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">보존 기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">세션 쿠키</td>
                          <td className="px-4 py-3 text-slate-600 border-b border-slate-200">브라우저 세션 동안만 유지</td>
                          <td className="px-4 py-3 text-slate-600 border-b border-slate-200">브라우저 종료 시 삭제</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 text-slate-700 font-medium">영구 쿠키</td>
                          <td className="px-4 py-3 text-slate-600">설정된 기간까지 유지</td>
                          <td className="px-4 py-3 text-slate-600">최대 2년</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-indigo-900 mb-3 text-sm">기능별 분류</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: '필수 쿠키', dotColor: 'bg-emerald-500', desc: '웹사이트 기본 기능에 필요한 쿠키', note: '사용자 동의 없이 사용됩니다.' },
                      { name: '기능 쿠키', dotColor: 'bg-indigo-500', desc: '향상된 기능 제공을 위한 쿠키', note: '사용자 동의 후 사용됩니다.' },
                      { name: '분석 쿠키', dotColor: 'bg-purple-500', desc: '웹사이트 사용 분석을 위한 쿠키', note: '사용자 동의 후 사용됩니다.' },
                      { name: '마케팅 쿠키', dotColor: 'bg-amber-500', desc: '맞춤형 정보 제공을 위한 쿠키', note: '사용자 동의 후 사용됩니다.' },
                    ].map((c, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-3 h-3 ${c.dotColor} rounded-full`} />
                          <h4 className="font-semibold text-indigo-900 text-sm">{c.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{c.desc}</p>
                        <p className="text-xs text-slate-500">{c.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Settings)}
                {sectionTitle('4. 사용 중인 쿠키 목록')}
              </div>
              <div className={contentBox}>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm overflow-hidden">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">쿠키명</th>
                        <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">목적</th>
                        <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">유형</th>
                        <th className="px-4 py-3 text-left font-semibold text-indigo-900 border-b border-slate-200">보존기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'app_session', purpose: '서비스 로그인 세션 유지', type: '필수', period: '세션' },
                        { name: 'csrf_token', purpose: '보안 토큰 저장', type: '필수', period: '세션' },
                        { name: 'lang_preference', purpose: '사용자 언어 설정', type: '기능', period: '1년' },
                        { name: 'user_settings', purpose: '편집기 개인화 설정', type: '기능', period: '6개월' },
                        { name: '_ga', purpose: 'Google Analytics 사용자 구분', type: '분석', period: '2년' },
                        { name: 'marketing_consent', purpose: '마케팅 정보 수신 동의', type: '마케팅', period: '1년' },
                      ].map((cookie, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                          <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-mono text-xs">{cookie.name}</td>
                          <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{cookie.purpose}</td>
                          <td className="px-4 py-3 border-b border-slate-200">
                            <span className={`${typeBadge(cookie.type)} px-2 py-0.5 rounded text-xs font-medium`}>
                              {cookie.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{cookie.period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Shield)}
                {sectionTitle('5. 쿠키 관리 방법')}
              </div>
              <div className={contentBox}>
                <h3 className="font-semibold text-indigo-900 mb-3 text-sm">브라우저별 쿠키 설정 방법</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Chrome', steps: ['설정 → 개인정보 및 보안', '쿠키 및 기타 사이트 데이터', '원하는 설정 선택'] },
                    { name: 'Firefox', steps: ['옵션 → 개인정보 및 보안', '쿠키 및 사이트 데이터', '설정 관리'] },
                    { name: 'Safari', steps: ['환경설정 → 개인정보', '쿠키 및 웹사이트 데이터', '차단 설정 선택'] },
                    { name: 'Edge', steps: ['설정 → 쿠키 및 사이트 권한', '쿠키 및 저장된 데이터', '차단 또는 허용 설정'] },
                  ].map((browser, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-indigo-900 mb-2 text-sm">{browser.name}</h4>
                      <ol className="text-sm text-slate-600 space-y-1">
                        {browser.steps.map((step, j) => (
                          <li key={j}>{j + 1}. {step}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(AlertCircle)}
                {sectionTitle('6. 쿠키 거부 시 영향')}
              </div>
              <div className={contentBox}>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-amber-800 font-medium mb-1 text-sm">중요 안내</p>
                      <p className="text-amber-700 text-sm">
                        쿠키를 거부하시면 일부 서비스 이용에 제한이 있을 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <h3 className="font-semibold text-indigo-900 mb-2 text-sm">제한되는 기능</h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 자동 로그인 기능</li>
                      <li>• 개인화된 설정 저장</li>
                      <li>• 언어 설정 기억</li>
                      <li>• 맞춤형 콘텐츠 제공</li>
                      <li>• 사용성 개선 기능</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <h3 className="font-semibold text-indigo-900 mb-2 text-sm">정상 이용 가능</h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• AI 한글 에디터 기본 기능</li>
                      <li>• PDF 변환 및 다운로드</li>
                      <li>• 고객지원 서비스</li>
                      <li>• 기본적인 웹사이트 이용</li>
                      <li>• 문의 및 상담 요청</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon(Calendar)}
                {sectionTitle('7. 정책 변경')}
              </div>
              <div className={`${contentBox} space-y-4`}>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">① 변경 통지</h3>
                  <p className="text-slate-600 text-sm">
                    이 쿠키 정책이 변경되는 경우, 변경사항은 웹사이트에 게시되며
                    중요한 변경사항의 경우 별도 통지를 실시합니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2 text-sm">② 시행일</h3>
                  <p className="text-slate-600 text-sm">
                    변경된 정책은 웹사이트에 게시된 날로부터 7일 후에 시행됩니다.
                  </p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-indigo-800 font-medium mb-1 text-sm">현재 정책 버전</p>
                      <p className="text-indigo-700 text-sm">버전: v1.0 | 시행일: 2025년 1월 1일</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">문의사항</h3>
              <p className="text-slate-600 mb-4 text-sm">쿠키 정책에 대한 문의사항이 있으시면 언제든지 연락주시기 바랍니다.</p>
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

export default CookiePolicy
