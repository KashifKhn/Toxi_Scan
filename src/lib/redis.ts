import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_SECRET_KEY as string);

export const saveToRedis = async (key: string, value: any) => {
  await redis.set(key, JSON.stringify(value), "EX", 3600);
};

export const getFromRedis = async (key: string) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};
