//INCONNU XD V2
const _0x30fccb = function () {
  let _0x47ead8 = true;
  return function (_0x524f8d, _0x4c89ee) {
    const _0x20e60e = _0x47ead8 ? function () {
      if (_0x4c89ee) {
        const _0x23616e = _0x4c89ee.apply(_0x524f8d, arguments);
        _0x4c89ee = null;
        return _0x23616e;
      }
    } : function () {};
    _0x47ead8 = false;
    return _0x20e60e;
  };
}();
(function () {
  _0x30fccb(this, function () {
    const _0x1b7717 = new RegExp("function *\\( *\\)");
    const _0x4b42fc = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x5ddb22 = _0x1027ca("init");
    if (!_0x1b7717.test(_0x5ddb22 + "chain") || !_0x4b42fc.test(_0x5ddb22 + "input")) {
      _0x5ddb22("0");
    } else {
      _0x1027ca();
    }
  })();
})();
import _0x260c54 from "fs";
import _0x348a94 from "path";
import _0x2e194c from "axios";
import _0x1cdb51 from "unzipper";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import _0x4db658 from "chalk";
const __filename = fileURLToPath(import.meta.url);
const __dirname = _0x348a94.dirname(__filename);
const TEMP_DIR = _0x348a94.join(__dirname, ".botx_temp");
const EXTRACT_DIR = _0x348a94.join(TEMP_DIR, "N-main");
async function downloadAndExtract() {
  if (_0x260c54.existsSync(TEMP_DIR)) {
    console.log(_0x4db658.yellow("☣️ Removing old folder..."));
    const _0x4644d1 = {
      "recursive": true,
      "force": true
    };
    _0x260c54.rmSync(TEMP_DIR, _0x4644d1);
  }
  const _0x29fb82 = {
    "recursive": true
  };
  _0x260c54.mkdirSync(TEMP_DIR, _0x29fb82);
  console.log(_0x4db658.blue("⬇️ Downloading the complete code from GitHub..."));
  const _0x423d5e = await _0x2e194c({
    "url": "https://github.com/prm123456789/N/archive/refs/heads/main.zip",
    "method": "GET",
    "responseType": "stream"
  });
  await new Promise((_0x57a1da, _0x5957f5) => {
    const _0x4accce = {
      path: TEMP_DIR
    };
    _0x423d5e.data.pipe(_0x1cdb51.Extract(_0x4accce)).on("close", _0x57a1da).on("error", _0x5957f5);
  });
  console.log(_0x4db658.green("✅ Extraction completed!"));
}
async function startBot() {
  console.log(_0x4db658.cyan("🚀 Starting the bot..."));
  const _0x2222f1 = spawn("node", [_0x348a94.join(EXTRACT_DIR, "index.js")], {
    "stdio": "inherit",
    "env": process.env
  });
  _0x2222f1.on("close", _0x46b618 => {
    console.log(_0x4db658.red("❌ The bot exited with code " + _0x46b618));
  });
}
(async () => {
  await downloadAndExtract();
  await startBot();
})();
function _0x1027ca(_0x63d63f) {
  function _0x887061(_0x29a5d0) {
    if (typeof _0x29a5d0 === "string") {
      return function (_0x3bd016) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x29a5d0 / _0x29a5d0).length !== 0x1 || _0x29a5d0 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x887061(++_0x29a5d0);
  }
  try {
    if (_0x63d63f) {
      return _0x887061;
    } else {
      _0x887061(0x0);
    }
  } catch (_0x9c9e94) {}
}
