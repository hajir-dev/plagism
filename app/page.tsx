import Button from "./_components/Button";
// import Credit from "./_components/Credit";
import Result from "./_components/Result";
import TextArea from "./_components/TextArea";
import RecoilRootWrapper from "./_components/RecoilRootWrapper";
import Title from "./_components/Title";
import TermOfService from "./_components/TOS";

export default function Home() {
  return (
    <RecoilRootWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
        <div className="max-w-5xl w-full font-mono text-sm">
          <div className="mb-4">
            <Title />
          </div>
          {/* <Credit /> */}
          <div>
            <TextArea />
            <TermOfService />
            <div className="mt-6">
              <Button />
            </div>
          </div>
          <Result />
        </div>
      </main>
    </RecoilRootWrapper>
  );
}
