import React from "react";

const Works = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <div className="text-center space-y-7">
          <span className="text-label text-white">How it works</span>
          <h3 className="text-heading text-white">
            Think of us as your partner in haircare
          </h3>
          <p>
            We’ll work together to continually improve your hair—and your
            KASOMO.
          </p>
        </div>
        <hr className="my-[72px]" />
        <div className="grid lg:grid-cols-3 gap-8 font-light lg:max-w-full max-w-[680px] mx-auto">
          <div className="text-center">
            <h3 className="text-heading text-white text-4xl mb-5">
              Easy online <br />
              consultation
            </h3>
            <p className="tracking-wider">
              In a few simple questions, we synthesize a myriad of factors
              around your hair, lifestyle, and preferences to find exactly what
              your hair needs
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-heading text-white text-4xl mb-5">
              A fully <br /> custom routine
            </h3>
            <p className="tracking-wider">
              We find the products you actually need, then customize each one
              for a perfect fit. Each one’s made with clean ingredients and
              bottled fresh to order
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-heading text-white text-4xl mb-5">
              Review & Refine® <br />
              your formulas
            </h3>
            <p className="tracking-wider">
              After receiving each order from KASOMO, tell us how your custom
              products perform by rating and reviewing each one. KASOMO will
              work to tailor your formulas for your next order to increase your
              satisfaction for always-improving results. KASOMO counts 5-star
              reviews on a per product basis, and includes 5-star reviews from
              first-time orders and from reviews of subsequent orders following
              a customer’s feedback in the Review & Refine® survey. When a
              customer is repeatedly satisfied, and submits another 5-star
              review, KASOMO counts that review as well - our goal is to
              constantly improve and to keep our customers happy!
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-20 text-center">
          <button className="btn btn-white-outline">Get your formula</button>
        </div>
      </div>
    </div>
  );
};

export default Works;
