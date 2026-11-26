[CmdletBinding(SupportsShouldProcess)]
param([Parameter(Mandatory)][string]$ProjectRoot)
$ErrorActionPreference='Stop'
$path=Join-Path $ProjectRoot 'VoC-Platform-rust/rust/app/src/frontend.rs'
$path=(Resolve-Path -LiteralPath $path).Path
$text=Get-Content -LiteralPath $path -Raw -Encoding UTF8
if($text.Contains('mod_rugged_news')){return}
$anchor='    &PAGE'
if(([regex]::Matches($text,[regex]::Escape($anchor))).Count -ne 1){throw 'VoC frontend entry point changed.'}
$replace=@"
    static MOD_RUGGED_NEWS: std::sync::LazyLock<String> = std::sync::LazyLock::new(|| {
        PAGE.replacen("</body>", concat!(include_str!("mod_rugged_news.html"), "</body>"), 1)
    });
    &MOD_RUGGED_NEWS
"@
if($PSCmdlet.ShouldProcess($path,'Add RUGGED NEWS sidebar and embedded site')){
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot 'mod_rugged_news.html') -Destination (Join-Path (Split-Path $path) 'mod_rugged_news.html')
    Set-Content -LiteralPath $path -Value $text.Replace($anchor,$replace.TrimEnd()) -Encoding UTF8 -NoNewline
}
