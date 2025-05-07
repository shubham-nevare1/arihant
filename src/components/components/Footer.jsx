import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white px-[30px] md:px-[140px]">
      {/* footer section 1-6 */}
      <div className="flex flex-wrap justify-between items-center py-10 gap-[25px]">
        {/* right  */}
        <div>
          <h2 className="text-[28px]">Sign up to our Newsletter</h2>
          <span className="text-[14px]">
            Stay on top of the markets with our bite-sized newsletter delivered
            right to your Inbox!
          </span>
        </div>
        {/* left */}
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="w-[200px] md:w-[300px] h-[40px] bg-white rounded-[10px] mr-[15px] text-black pl-4"
          />
          <button className="bg-[#D6E56E] w-[107px] h-[40px] rounded-[10px] text-black">
            Subscribe
          </button>
        </div>
      </div>

      {/* footer section 2-6 */}
      <div className="border-t border-gray-700">
        <div className="flex flex-wrap justify-between gap-10 pt-[60px]">
          {/* Link Columns */}
          <div className="flex flex-wrap gap-4 justify-between flex-grow">
            {/* Left Section */}
            <div className="max-w-[200px]">
              {/* Logo */}
              <div className="mb-4">
                <Image src="/logo.png" alt="Logo" width={150} height={40} />
              </div>
              {/* Address */}
              <p className="mb-4 leading-6 text-[14px]">
                #1011 Solitaire Corporate Park, Andheri Ghatkopar Link Road,
                Chakala, Andheri (E), Mumbai - 400093
              </p>
              {/* Badge */}
              <div className="mb-4 hidden md:block">
                <Image
                  src="/badge.png"
                  alt="Certified Badge"
                  width={67}
                  height={113}
                />
              </div>
            </div>
            {[
              {
                title: "Products",
                links: [
                  "Stocks and ETFS",
                  "IPOs",
                  "Mutual Funds",
                  "Commodities",
                  "Futures and Options",
                  "Currency",
                  "MTF",
                ],
              },
              {
                title: "Learning",
                links: [
                  "Quality Financial Education",
                  "Knowledge Seeker",
                  "Stock Market Invester",
                  "Stock Market Beginner",
                  "Blogs",
                ],
              },
              {
                title: "Company",
                links: [
                  "About Us",
                  "Contact Us",
                  "Media",
                  "Life at Arihant Capital",
                  "Investor Relations",
                  "Refer and Earn",
                ],
              },
              {
                title: "Quick Links",
                links: [
                  "Fund Transfer",
                  "Pricing",
                  "Support",
                  "FAQs",
                  "Calculators",
                ],
              },
              {
                title: "Legal",
                links: [
                  "Terms and conditions",
                  "Privacy Policy",
                  "Policies & procedures",
                  "Investor Charter & Grievances",
                  "NSE",
                  "BSE",
                ],
              },
            ].map((col, index) => (
              <div key={index} className="w-[140px] ">
                <h2 className="font-semibold mb-3">{col.title}</h2>
                <ul className="flex flex-col gap-2 text-gray-300">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mb-4 md:hidden block pr-[60px]">
              <Image
                src="/badge.png"
                alt="Certified Badge"
                width={67}
                height={113}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4 text-gray-400 text-xs py-[60px]">
          {/* App download for desktop */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-[16px]">Download our app:</span>
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={120}
              height={40}
            />
            <Image
              src="/app-store.png"
              alt="App Store"
              width={120}
              height={40}
            />
          </div>

          {/* App download for mobile */}
          <div className="flex items-center gap-2 md:hidden mb-1.5">
            <span className="text-[16px]">Download our app:</span>
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={100}
              height={40}
            />
            <Image
              src="/app-store.png"
              alt="App Store"
              width={100}
              height={40}
            />
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-4">
            <span className="text-[16px]">Follow us on:</span>
            <FaTwitter className="cursor-pointer w-6 h-6" />
            <FaInstagram className="cursor-pointer w-6 h-6" />
            <FaFacebookF className="cursor-pointer w-6 h-6" />
          </div>
        </div>
      </div>

      {/* footer section 3-6 */}
      <div className="space-y-2  border-t border-gray-700 pt-[60px] pb-[30px]">
        <p>
          Arihant Capital Markets Limited is a SEBI registered stock broker and
          depository participant. Registration numbers:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>SEBI Stock Broker Registration number: INZ000180939;</li>
          <li>Depository Participant: IN301983</li>
          <li>NSDL - IN-DP-127-2015; CDSL DP ID: 43000;</li>
          <li>NCDEX - 01274; MCX - 56565; AMFI - ARN 15114;</li>
          <li>SEBI Research Analyst Reg. No. - INH0000002764</li>
          <li>
            Registered Address: 6, Lad colony, Y.N. Road, Indore – 452001.
          </li>
          <li>
            Corporate office address: #1011 Solitaire Corporate Park, Andheri
            Ghatkopar Link Road, Chakala, Andheri (E), Mumbai - 400093
          </li>
        </ul>
        <p>
          Please carefully read the risk disclosure documents as prescribed by
          SEBI and Do's & Don’ts by NSE, BSE, NCDEX & MCX. For any complaints
          regarding securities broking, pls write to{" "}
          <a
            href="mailto:compliance@arihantcapital.com"
            className="text-blue-400 underline"
          >
            compliance@arihantcapital.com
          </a>{" "}
          and for DP write to{" "}
          <a
            href="mailto:dpcompliance@arihantcapital.com"
            className="text-blue-400 underline"
          >
            dpcompliance@arihantcapital.com
          </a>
          .
        </p>
        <p>
          If you want to register your complaints through SEBI Score Portal
          please{" "}
          <a href="#" className="text-blue-400 underline">
            click here
          </a>
          . Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances.
        </p>
        <p className="text-sm">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
      </div>

      {/* footer section 4-6 */}
      <div className="disclaimer border-t border-gray-700 pt-4 py-[20px]">
        Disclaimer: Arihant Capital Markets Limited is engaged in client based
        and proprietary trading on various exchanges.
      </div>

      {/* footer section 5-6 */}
      <div className="border-t border-gray-700 py-[30px] ">
        <h2 className=" text-lg font-semibold">ATTENTION INVESTORS :</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            KYC is one time exercise while dealing in securities markets - once
            KYC is done through a SEBI registered intermediary (Broker, DP,
            Mutual Fund etc.), you need not undergo the same process again when
            you approach another intermediary.
          </li>
          <li>
            For Stock Broking Transaction 'Prevent unauthorised transactions in
            your account - update your mobile numbers/email IDs with your
            stockbrokers. Receive information of your transactions directly from
            Exchange on your mobile/email at the end of the day
          </li>
          <li>
            If you are subscribing to an IPO, there is no need to issue cheques.
            Just write the bank account number and sign in the application form
            to authorise your bank to make payment in case of allotment. No
            worries for refund as the money remains in investor's account.
          </li>
          <li>
            Investors should be cautious on unsolicited emails and SMS advising
            to buy, sell or hold securities and trade only on the basis of
            informed decision. Investors are advised to invest after conducting
            appropriate analysis of respective companies and not to blindly
            follow unfounded rumours, tips etc. Further, you are also requested
            to share your knowledge or evidence of systemic wrongdoing,
            potential frauds or unethical behaviour through the anonymous portal
            facility provided on BSE & NSE website.
          </li>
          <li>
            Registration granted by SEBI and certification from NISM in no way
            guarantee performance of the intermediary or provide any assurance
            of returns to investors.
          </li>
        </ul>
        <h2 className=" text-lg font-semibold mt-[20px]">
          Awareness regarding guidelines of margin collection:
        </h2>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Stock brokers can accept securities as margins from clients only by
            way of pledge in the depository system w.e.f September 01, 2020.
          </li>
          <li>
            {" "}
            Update your e-mail and phone number with your stock broker /
            depository participant and receive OTP directly from depository on
            your e-mail and/or mobile number to create pledge.
          </li>
          <li>
            {" "}
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.Issued in the interest of
            investors
          </li>
        </ol>
        <p className="mt-[20px]">
          Download client registration documents (Rights & Obligations, Risk
          Disclosure Document, Do's & Don'ts) in vernacular language: BSE | NSE
          | MCX
        </p>
        <p>
          Important Links: SEBI | BSE | NSE | MCX | CDSL | ODR Portal | Investor
          Charter for Stock Brokers | Investor Charter for DP | UCC Advisory |
          e-Voting for Shareholders
        </p>
      </div>

      {/* footer section 6-6 */}
      <div className="border-t border-gray-700 text-center py-[30px] text-[12px] flex flex-wrap justify-between items-center">
        <div>
          Copyright © {new Date().getFullYear()} Arihant Capital Markets Ltd.
          All rights reserved.
        </div>
        <div className="mt-1.5">Privacy | Terms & Conditions</div>
      </div>
    </footer>
  );
}

export default Footer;
