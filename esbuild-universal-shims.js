// add fetch polyfill
import fetch from "cross-fetch";
import { webcrypto } from "crypto";
import Blob from "cross-blob";

globalThis.fetch = fetch;

globalThis.crypto = webcrypto;

globalThis.Blob = Blob;
