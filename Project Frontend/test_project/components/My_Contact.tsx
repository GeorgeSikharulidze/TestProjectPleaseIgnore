import { Mail, MapPin, MessageSquare,FileQuestion, ArrowRight } from "lucide-react";

const My_Contact = () => {
  return (
    <section className="py-32 flex items-center justify-center">
      <div className="container">
        <div className="mb-14">
          <span className="text-sm font-semibold">Reach Us</span>
          <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
            Speak with Our Friendly Team
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Email Us</p>
            <p className="mb-3 text-muted-foreground">
              Our team is ready to assist.
            </p>
            <a href="#" className="font-semibold hover:underline">
              abc@example.com
            </a>
          </div>
          <div>
          <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MessageSquare className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold"> Message Us</p>
            <p className="mb-3 text-muted-foreground">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>
            <a href="#" className="font-semibold hover:underline">
              +123 456 7890
            </a>
          </div>
          <div>
          <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <FileQuestion className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold"> FAQ</p>
            <a
            href="FAQ"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            See Frequently asked questions{" "}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { My_Contact };
