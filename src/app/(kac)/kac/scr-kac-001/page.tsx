"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function ScrKac001() {
  const [yongdo, setYongdo] = useState<"업무시설" | "상업시설">("업무시설");

  return (
    <div className="space-y-4">
      <div className="border-b border-[#e7eef5] pb-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">임대계약관리</div>
        <h1 className="mt-0.5 text-[18px] font-bold text-[#0f172a]">[RT] 가계약마스터 생성</h1>
      </div>

      {/* 입력조건 */}
      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">입력조건</div>
        </div>
        <div className="px-5 py-4">
          <table className="text-sm border-collapse">
            <tbody>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">회사코드</td>
                <td className="py-2.5 flex items-center gap-2">
                  <Input value="KAC1" readOnly className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                  <span className="text-sm text-[#334155]">한국공항공사</span>
                </td>
              </tr>
              <tr className="border-b border-[#e7eef5]">
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">년도</td>
                <td className="py-2.5">
                  <Input defaultValue="2026" className="h-7 w-20 border-[#d6e0ea] text-sm" />
                </td>
              </tr>
              <tr>
                <td className="w-28 py-2.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                <td className="py-2.5">
                  <Input value="BA15" readOnly className="h-7 w-16 border-[#d6e0ea] text-sm bg-[#f8fbff]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 용도구분 */}
      <div className="rounded-[18px] border border-[#d7e2ee] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#e7eef5] px-5 py-3">
          <div className="text-sm font-semibold text-[#0f172a]">용도구분</div>
        </div>
        <div className="px-5 py-4 space-y-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-[#334155]">
            <input
              type="radio"
              name="yongdo"
              value="업무시설"
              checked={yongdo === "업무시설"}
              onChange={() => setYongdo("업무시설")}
              className="accent-[#002D56]"
            />
            업무시설
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-[#334155]">
            <input
              type="radio"
              name="yongdo"
              value="상업시설"
              checked={yongdo === "상업시설"}
              onChange={() => setYongdo("상업시설")}
              className="accent-[#002D56]"
            />
            상업시설
          </label>
        </div>
      </div>
    </div>
  );
}
