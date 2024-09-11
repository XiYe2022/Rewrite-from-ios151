#!url=http://script.hub/file/_start_/https://raw.githubusercontent.com/XiYe2022/Rewrite-from-ios151/voicenotes.js/_end_/voicenotes.sgmodule?type=qx-rewrite&target=shadowrocket-module&del=true
#!name=voicenotes
#!desc=voicenotes

[Script]
voicenotes = type=http-response, pattern=https://api.voicenotes.com/api/auth/me, script-path=https://raw.githubusercontent.com/XiYe2022/Rewrite-from-ios151/main/voicenotes.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api.voicenotes.com
