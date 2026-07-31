# Gemini API Key를 .env에 저장
# 사용: .\scripts\set-gemini-key.ps1 -Key "AIzaSy..."

param(
  [Parameter(Mandatory = $false)]
  [string]$Key
)

$envFile = Join-Path $PSScriptRoot "..\.env"
if (-not (Test-Path $envFile)) {
  Copy-Item (Join-Path $PSScriptRoot "..\.env.example") $envFile
}

if (-not $Key) {
  $Key = Read-Host "Gemini API Key 입력 (https://aistudio.google.com/apikey)"
}

if (-not $Key.Trim()) {
  Write-Error "API Key가 비어 있습니다."
  exit 1
}

$content = Get-Content $envFile -Raw
if ($content -match '(?m)^GEMINI_API_KEY=.*$') {
  $content = $content -replace '(?m)^GEMINI_API_KEY=.*$', "GEMINI_API_KEY=$Key"
} else {
  $content += "`nGEMINI_API_KEY=$Key`n"
}
Set-Content -Path $envFile -Value $content.TrimEnd() -NoNewline
Add-Content -Path $envFile -Value "`n"

Write-Host "GEMINI_API_KEY가 .env에 저장되었습니다."
Write-Host "개발 서버를 재시작하세요: npm run dev"
