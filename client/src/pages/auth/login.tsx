import Link from "next/link";
import { FormEvent, useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/Button";
import { authService } from "@/services/auth.service";

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [message, setMessage] = useState("");

  function validate() {
    const nextErrors: LoginErrors = {};

    if (!email.includes("@")) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!validate()) {
      return;
    }

    authService.login({ email, password });
    setMessage("Logged in with a mock JWT-ready token.");
  }

  return (
    <>
      <SEO title="Login" canonicalPath="/auth/login" />
      <section className="py-12 sm:py-16">
        <Container size="narrow">
          <div className="grid overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-white shadow-[0_28px_80px_rgba(31,27,24,0.08)] md:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[var(--color-soft)] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-rosewood)]">
                Account
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[var(--color-ink)]">
                Welcome back to K-Glow.
              </h1>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                Sign in with email and password. The service layer stores a mock access
                token safely in browser localStorage only.
              </p>
            </div>

            <form className="p-8 sm:p-10" onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold text-[var(--color-cocoa)]">
                Email
                <input
                  className="mt-2 h-12 w-full rounded-[8px] border border-[var(--color-line)] px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  value={email}
                />
              </label>
              {errors.email ? (
                <p className="mt-2 text-sm text-[var(--color-rosewood)]">{errors.email}</p>
              ) : null}

              <label className="mt-5 block text-sm font-semibold text-[var(--color-cocoa)]">
                Password
                <input
                  className="mt-2 h-12 w-full rounded-[8px] border border-[var(--color-line)] px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  value={password}
                />
              </label>
              {errors.password ? (
                <p className="mt-2 text-sm text-[var(--color-rosewood)]">
                  {errors.password}
                </p>
              ) : null}

              {message ? (
                <p className="mt-5 rounded-[8px] bg-[var(--color-soft)] p-3 text-sm font-semibold text-[var(--color-cocoa)]">
                  {message}
                </p>
              ) : null}

              <Button className="mt-6 w-full rounded-[8px]" type="submit">
                Login
              </Button>
              <p className="mt-5 text-center text-sm text-[var(--color-muted)]">
                New to K-Glow?{" "}
                <Link
                  className="font-semibold text-[var(--color-rosewood)]"
                  href="/auth/register"
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
