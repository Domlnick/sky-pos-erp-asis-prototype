"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ScrKac049() {
  const [searched, setSearched] = useState(false);

  const rows = [
    { year: "2026", bizArea: "BA15", custCode: "S09458", custName: "주식회사 성료트", bizType: "한국공사서비스", area: "17,713", areaType: "1,331,130", rentValue: "1,183,250", bizType2: "0", rentType: "2,514,380", rentType2: "2,514,380", totalRent: "2,514,380", totalDeposit: "0", deposit: "" },
    { year: "2026", bizArea: "BA15", custCode: "S09256", custName: "현대관리", bizType: "한국공사서비스", area: "17,648", areaType: "6,100", rentValue: "2,141,690", bizType2: "0", rentType: "2,147,790", rentType2: "0", totalRent: "2,147,790", totalDeposit: "0", deposit: "" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약총괄표(고객코드 기준) 년월:2026.05</h2>

      {!searched ? (
        <div className="rounded border border-[#c8d8e8] bg-white p-4 space-y-3">
          <div className="text-[12px] font-semibold text-[#1e3a5f] border-b border-[#d8e4ee] pb-1">입력조건</div>
          <table className="text-[12px] border-collapse w-full max-w-xl">
            <tbody>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b] w-36">회사코드</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="KAC1" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[12px] text-[#475569]">한국공항공사</span>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">년월</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="2026.05" className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-24 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">사업영역</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input defaultValue="BA15" className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-20 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
              <tr className="border-b border-[#f1f5f9]">
                <td className="py-1.5 pr-4 text-[12px] font-semibold text-[#64748b]">고객코드</td>
                <td className="py-1.5 flex items-center gap-2">
                  <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                  <span className="text-[11px] text-[#94a3b8]">종료</span>
                  <Input className="h-7 w-28 border-[#d6e0ea] text-[12px]" />
                  <button className="border border-[#d6e0ea] bg-white px-1.5 py-1 text-[11px] text-[#475569] rounded">▲</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border border-[#d8e4ee] rounded p-2 space-y-1">
            <div className="text-[12px] font-semibold text-[#1e3a5f] mb-1">추가정보</div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb-contact" className="w-4 h-4" /><label htmlFor="cb-contact" className="text-[12px]">연락정보 포함</label></div>
            <div className="flex items-center gap-2"><input type="checkbox" id="cb-send" defaultChecked className="w-4 h-4" /><label htmlFor="cb-send" className="text-[12px]">고객전송및실적포함</label></div>
          </div>
          <Button className="bg-[#1e3a5f] text-white text-[12px] px-3 py-1.5 rounded hover:bg-[#162e4d] h-auto" onClick={() => setSearched(true)}>조회</Button>
        </div>
      ) : (
        <div className="space-y-2">
          <Button variant="outline" className="text-[12px] px-3 py-1.5 h-auto" onClick={() => setSearched(false)}>← 조회조건</Button>
          <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr>
                    {["년도", "사업영역", "고객코드", "고객명", "업종명", "면적계", "초대임대계", "공시율대계", "부매시대계", "임대료", "구내성대계", "임대료 계", "구내업방대계", "총판방대계", "임보관역", "입보관금", "입보관금액계"].map((h) => (
                      <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.year}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.bizType}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.area}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.areaType}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.rentValue}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.bizType2}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.rentType}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.rentType2}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.totalRent}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.totalDeposit}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">{r.deposit}</td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right"></td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right"></td>
                      <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
