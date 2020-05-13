"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var assert_1 = __importDefault(require("assert"));
var lrucache_1 = require("../lrucache");
describe.each([
  [
    [
      [1, 2],
      [2, 3],
      [3, 4]
    ],
    { limit: 3 },
    [[5, 6]],
    [
      [2, 3],
      [3, 4],
      [5, 6]
    ] // result
  ],
  [
    [
      [{ foo: 1 }, 2],
      [{ foo: 2 }, 3],
      [{ foo: 3 }, 4]
    ],
    {
      limit: 3,
      identify: function(key) {
        return JSON.stringify(key);
      }
    },
    [[5, 6]],
    [
      [{ foo: 2 }, 3],
      [{ foo: 3 }, 4],
      [5, 6]
    ] // result
  ]
])("lrucache", function(data, option, newData, result) {
  test("put", function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var lrucache, _i, result_1, d, r;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            lrucache = new lrucache_1.LRUCache(option);
            data.forEach(function(d) {
              lrucache.put(d[0], d[1]);
            });
            newData.forEach(function(d) {
              lrucache.put(d[0], d[1]);
            });
            (_i = 0), (result_1 = result);
            _a.label = 1;
          case 1:
            if (!(_i < result_1.length)) return [3 /*break*/, 4];
            d = result_1[_i];
            return [4 /*yield*/, lrucache.get(d[0])];
          case 2:
            r = _a.sent();
            assert_1.default.strictEqual(r, d[1]);
            _a.label = 3;
          case 3:
            _i++;
            return [3 /*break*/, 1];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  });
});
describe.each([
  [
    [
      [1, 2],
      [2, 3],
      [3, 4]
    ],
    { limit: 3 },
    [[2]],
    [
      [1, 2],
      [3, 4]
    ] // result
  ]
])("lrucache", function(data, option, del, result) {
  test("delete", function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var lrucache, _i, del_1, d, r, _a, result_2, d, r;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            lrucache = new lrucache_1.LRUCache(option);
            data.forEach(function(d) {
              lrucache.put(d[0], d[1]);
            });
            (_i = 0), (del_1 = del);
            _b.label = 1;
          case 1:
            if (!(_i < del_1.length)) return [3 /*break*/, 5];
            d = del_1[_i];
            return [4 /*yield*/, lrucache.delete(d[0])];
          case 2:
            _b.sent();
            return [4 /*yield*/, lrucache.get(d[0])];
          case 3:
            r = _b.sent();
            assert_1.default.strictEqual(r, null);
            _b.label = 4;
          case 4:
            _i++;
            return [3 /*break*/, 1];
          case 5:
            (_a = 0), (result_2 = result);
            _b.label = 6;
          case 6:
            if (!(_a < result_2.length)) return [3 /*break*/, 9];
            d = result_2[_a];
            return [4 /*yield*/, lrucache.get(d[0])];
          case 7:
            r = _b.sent();
            assert_1.default.strictEqual(r, d[1]);
            _b.label = 8;
          case 8:
            _a++;
            return [3 /*break*/, 6];
          case 9:
            return [2 /*return*/];
        }
      });
    });
  });
});
describe.each([
  [
    [
      [1, 2],
      [2, 3],
      [3, 4]
    ],
    { limit: 3 },
    [
      [1, null],
      [3, null]
    ] // result
  ]
])("lrucache", function(data, option, result) {
  test("clearall", function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var lrucache, _i, result_3, d, r;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            lrucache = new lrucache_1.LRUCache(option);
            data.forEach(function(d) {
              lrucache.put(d[0], d[1]);
            });
            lrucache.clearAll();
            (_i = 0), (result_3 = result);
            _a.label = 1;
          case 1:
            if (!(_i < result_3.length)) return [3 /*break*/, 4];
            d = result_3[_i];
            return [4 /*yield*/, lrucache.get(d[0])];
          case 2:
            r = _a.sent();
            assert_1.default.strictEqual(r, d[1]);
            _a.label = 3;
          case 3:
            _i++;
            return [3 /*break*/, 1];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  });
});
