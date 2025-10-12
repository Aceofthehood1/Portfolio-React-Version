interface Props {}

const Portfolio = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row items-center justify-center mt-[100px]">
        <div className=" flex flex-col gap-2 max-w-[600px]">
          <h1 className="text-5xl mb-4">Experiences</h1>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold flex justify-between">
              <span>SAP Investment Holdings</span>
              <span>Feb-2024 - Current</span>
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold flex justify-between">
              <span>Kato</span>
              <span>March-2025 - July-2025</span>
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold flex justify-between">
              <span>Turntabl</span>
              <span>June-2022 - August-2022</span>
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[600px]">
          <h1 className="text-5xl mb-4">Projects</h1>
          <div className=" flex flex-col gap-2 max-w-[600px]">
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold flex justify-between">
              <span>Restaurant Reservation Marketplace</span>
              <span>June-2022 - August-2022</span>
            </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold flex justify-between">
              <span>Vehicle Management System</span>
              <span>June-2022 - August-2022</span>
            </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold flex justify-between">
              <span>Inventory System</span>
              <span>June-2022 - August-2022</span>
            </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
