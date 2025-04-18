
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Turnover
 * 
 */
export type Turnover = $Result.DefaultSelection<Prisma.$TurnoverPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turnover`: Exposes CRUD operations for the **Turnover** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnovers
    * const turnovers = await prisma.turnover.findMany()
    * ```
    */
  get turnover(): Prisma.TurnoverDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Player: 'Player',
    Turnover: 'Turnover'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "player" | "turnover"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Turnover: {
        payload: Prisma.$TurnoverPayload<ExtArgs>
        fields: Prisma.TurnoverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>
          }
          findFirst: {
            args: Prisma.TurnoverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>
          }
          findMany: {
            args: Prisma.TurnoverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>[]
          }
          create: {
            args: Prisma.TurnoverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>
          }
          createMany: {
            args: Prisma.TurnoverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnoverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>[]
          }
          delete: {
            args: Prisma.TurnoverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>
          }
          update: {
            args: Prisma.TurnoverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>
          }
          deleteMany: {
            args: Prisma.TurnoverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurnoverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>[]
          }
          upsert: {
            args: Prisma.TurnoverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoverPayload>
          }
          aggregate: {
            args: Prisma.TurnoverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurnover>
          }
          groupBy: {
            args: Prisma.TurnoverGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoverGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnoverCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoverCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    player?: PlayerOmit
    turnover?: TurnoverOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    turnovers: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnovers?: boolean | PlayerCountOutputTypeCountTurnoversArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountTurnoversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoverWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    opp: number | null
    dpp: number | null
    touches: number | null
    goals: number | null
    assists: number | null
    defense: number | null
    hucks: number | null
    rzto: number | null
    hto: number | null
    resetTo: number | null
    receiverErr: number | null
    throwerErr: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    opp: number | null
    dpp: number | null
    touches: number | null
    goals: number | null
    assists: number | null
    defense: number | null
    hucks: number | null
    rzto: number | null
    hto: number | null
    resetTo: number | null
    receiverErr: number | null
    throwerErr: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    opp: number | null
    dpp: number | null
    touches: number | null
    goals: number | null
    assists: number | null
    defense: number | null
    hucks: number | null
    rzto: number | null
    hto: number | null
    resetTo: number | null
    receiverErr: number | null
    throwerErr: number | null
    team: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    opp: number | null
    dpp: number | null
    touches: number | null
    goals: number | null
    assists: number | null
    defense: number | null
    hucks: number | null
    rzto: number | null
    hto: number | null
    resetTo: number | null
    receiverErr: number | null
    throwerErr: number | null
    team: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    opp: number
    dpp: number
    touches: number
    goals: number
    assists: number
    defense: number
    hucks: number
    rzto: number
    hto: number
    resetTo: number
    receiverErr: number
    throwerErr: number
    team: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    opp?: true
    dpp?: true
    touches?: true
    goals?: true
    assists?: true
    defense?: true
    hucks?: true
    rzto?: true
    hto?: true
    resetTo?: true
    receiverErr?: true
    throwerErr?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    opp?: true
    dpp?: true
    touches?: true
    goals?: true
    assists?: true
    defense?: true
    hucks?: true
    rzto?: true
    hto?: true
    resetTo?: true
    receiverErr?: true
    throwerErr?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    opp?: true
    dpp?: true
    touches?: true
    goals?: true
    assists?: true
    defense?: true
    hucks?: true
    rzto?: true
    hto?: true
    resetTo?: true
    receiverErr?: true
    throwerErr?: true
    team?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    opp?: true
    dpp?: true
    touches?: true
    goals?: true
    assists?: true
    defense?: true
    hucks?: true
    rzto?: true
    hto?: true
    resetTo?: true
    receiverErr?: true
    throwerErr?: true
    team?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    opp?: true
    dpp?: true
    touches?: true
    goals?: true
    assists?: true
    defense?: true
    hucks?: true
    rzto?: true
    hto?: true
    resetTo?: true
    receiverErr?: true
    throwerErr?: true
    team?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    name: string
    opp: number
    dpp: number
    touches: number
    goals: number
    assists: number
    defense: number
    hucks: number
    rzto: number
    hto: number
    resetTo: number
    receiverErr: number
    throwerErr: number
    team: string
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    opp?: boolean
    dpp?: boolean
    touches?: boolean
    goals?: boolean
    assists?: boolean
    defense?: boolean
    hucks?: boolean
    rzto?: boolean
    hto?: boolean
    resetTo?: boolean
    receiverErr?: boolean
    throwerErr?: boolean
    team?: boolean
    turnovers?: boolean | Player$turnoversArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    opp?: boolean
    dpp?: boolean
    touches?: boolean
    goals?: boolean
    assists?: boolean
    defense?: boolean
    hucks?: boolean
    rzto?: boolean
    hto?: boolean
    resetTo?: boolean
    receiverErr?: boolean
    throwerErr?: boolean
    team?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    opp?: boolean
    dpp?: boolean
    touches?: boolean
    goals?: boolean
    assists?: boolean
    defense?: boolean
    hucks?: boolean
    rzto?: boolean
    hto?: boolean
    resetTo?: boolean
    receiverErr?: boolean
    throwerErr?: boolean
    team?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    opp?: boolean
    dpp?: boolean
    touches?: boolean
    goals?: boolean
    assists?: boolean
    defense?: boolean
    hucks?: boolean
    rzto?: boolean
    hto?: boolean
    resetTo?: boolean
    receiverErr?: boolean
    throwerErr?: boolean
    team?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "opp" | "dpp" | "touches" | "goals" | "assists" | "defense" | "hucks" | "rzto" | "hto" | "resetTo" | "receiverErr" | "throwerErr" | "team", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnovers?: boolean | Player$turnoversArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      turnovers: Prisma.$TurnoverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      opp: number
      dpp: number
      touches: number
      goals: number
      assists: number
      defense: number
      hucks: number
      rzto: number
      hto: number
      resetTo: number
      receiverErr: number
      throwerErr: number
      team: string
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turnovers<T extends Player$turnoversArgs<ExtArgs> = {}>(args?: Subset<T, Player$turnoversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly name: FieldRef<"Player", 'String'>
    readonly opp: FieldRef<"Player", 'Int'>
    readonly dpp: FieldRef<"Player", 'Int'>
    readonly touches: FieldRef<"Player", 'Int'>
    readonly goals: FieldRef<"Player", 'Int'>
    readonly assists: FieldRef<"Player", 'Int'>
    readonly defense: FieldRef<"Player", 'Int'>
    readonly hucks: FieldRef<"Player", 'Int'>
    readonly rzto: FieldRef<"Player", 'Int'>
    readonly hto: FieldRef<"Player", 'Int'>
    readonly resetTo: FieldRef<"Player", 'Int'>
    readonly receiverErr: FieldRef<"Player", 'Int'>
    readonly throwerErr: FieldRef<"Player", 'Int'>
    readonly team: FieldRef<"Player", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.turnovers
   */
  export type Player$turnoversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    where?: TurnoverWhereInput
    orderBy?: TurnoverOrderByWithRelationInput | TurnoverOrderByWithRelationInput[]
    cursor?: TurnoverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoverScalarFieldEnum | TurnoverScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Turnover
   */

  export type AggregateTurnover = {
    _count: TurnoverCountAggregateOutputType | null
    _avg: TurnoverAvgAggregateOutputType | null
    _sum: TurnoverSumAggregateOutputType | null
    _min: TurnoverMinAggregateOutputType | null
    _max: TurnoverMaxAggregateOutputType | null
  }

  export type TurnoverAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
  }

  export type TurnoverSumAggregateOutputType = {
    id: number | null
    playerId: number | null
  }

  export type TurnoverMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    timestamp: string | null
    type: string | null
    createdAt: Date | null
  }

  export type TurnoverMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    timestamp: string | null
    type: string | null
    createdAt: Date | null
  }

  export type TurnoverCountAggregateOutputType = {
    id: number
    playerId: number
    timestamp: number
    type: number
    createdAt: number
    _all: number
  }


  export type TurnoverAvgAggregateInputType = {
    id?: true
    playerId?: true
  }

  export type TurnoverSumAggregateInputType = {
    id?: true
    playerId?: true
  }

  export type TurnoverMinAggregateInputType = {
    id?: true
    playerId?: true
    timestamp?: true
    type?: true
    createdAt?: true
  }

  export type TurnoverMaxAggregateInputType = {
    id?: true
    playerId?: true
    timestamp?: true
    type?: true
    createdAt?: true
  }

  export type TurnoverCountAggregateInputType = {
    id?: true
    playerId?: true
    timestamp?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type TurnoverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnover to aggregate.
     */
    where?: TurnoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnovers to fetch.
     */
    orderBy?: TurnoverOrderByWithRelationInput | TurnoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnovers
    **/
    _count?: true | TurnoverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoverMaxAggregateInputType
  }

  export type GetTurnoverAggregateType<T extends TurnoverAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnover]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnover[P]>
      : GetScalarType<T[P], AggregateTurnover[P]>
  }




  export type TurnoverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoverWhereInput
    orderBy?: TurnoverOrderByWithAggregationInput | TurnoverOrderByWithAggregationInput[]
    by: TurnoverScalarFieldEnum[] | TurnoverScalarFieldEnum
    having?: TurnoverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoverCountAggregateInputType | true
    _avg?: TurnoverAvgAggregateInputType
    _sum?: TurnoverSumAggregateInputType
    _min?: TurnoverMinAggregateInputType
    _max?: TurnoverMaxAggregateInputType
  }

  export type TurnoverGroupByOutputType = {
    id: number
    playerId: number
    timestamp: string | null
    type: string
    createdAt: Date
    _count: TurnoverCountAggregateOutputType | null
    _avg: TurnoverAvgAggregateOutputType | null
    _sum: TurnoverSumAggregateOutputType | null
    _min: TurnoverMinAggregateOutputType | null
    _max: TurnoverMaxAggregateOutputType | null
  }

  type GetTurnoverGroupByPayload<T extends TurnoverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoverGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoverGroupByOutputType[P]>
        }
      >
    >


  export type TurnoverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnover"]>

  export type TurnoverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnover"]>

  export type TurnoverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnover"]>

  export type TurnoverSelectScalar = {
    id?: boolean
    playerId?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type TurnoverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "timestamp" | "type" | "createdAt", ExtArgs["result"]["turnover"]>
  export type TurnoverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type TurnoverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type TurnoverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $TurnoverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turnover"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      timestamp: string | null
      type: string
      createdAt: Date
    }, ExtArgs["result"]["turnover"]>
    composites: {}
  }

  type TurnoverGetPayload<S extends boolean | null | undefined | TurnoverDefaultArgs> = $Result.GetResult<Prisma.$TurnoverPayload, S>

  type TurnoverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnoverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnoverCountAggregateInputType | true
    }

  export interface TurnoverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turnover'], meta: { name: 'Turnover' } }
    /**
     * Find zero or one Turnover that matches the filter.
     * @param {TurnoverFindUniqueArgs} args - Arguments to find a Turnover
     * @example
     * // Get one Turnover
     * const turnover = await prisma.turnover.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoverFindUniqueArgs>(args: SelectSubset<T, TurnoverFindUniqueArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turnover that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnoverFindUniqueOrThrowArgs} args - Arguments to find a Turnover
     * @example
     * // Get one Turnover
     * const turnover = await prisma.turnover.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoverFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turnover that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverFindFirstArgs} args - Arguments to find a Turnover
     * @example
     * // Get one Turnover
     * const turnover = await prisma.turnover.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoverFindFirstArgs>(args?: SelectSubset<T, TurnoverFindFirstArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turnover that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverFindFirstOrThrowArgs} args - Arguments to find a Turnover
     * @example
     * // Get one Turnover
     * const turnover = await prisma.turnover.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoverFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoverFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turnovers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnovers
     * const turnovers = await prisma.turnover.findMany()
     * 
     * // Get first 10 Turnovers
     * const turnovers = await prisma.turnover.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoverWithIdOnly = await prisma.turnover.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoverFindManyArgs>(args?: SelectSubset<T, TurnoverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turnover.
     * @param {TurnoverCreateArgs} args - Arguments to create a Turnover.
     * @example
     * // Create one Turnover
     * const Turnover = await prisma.turnover.create({
     *   data: {
     *     // ... data to create a Turnover
     *   }
     * })
     * 
     */
    create<T extends TurnoverCreateArgs>(args: SelectSubset<T, TurnoverCreateArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turnovers.
     * @param {TurnoverCreateManyArgs} args - Arguments to create many Turnovers.
     * @example
     * // Create many Turnovers
     * const turnover = await prisma.turnover.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoverCreateManyArgs>(args?: SelectSubset<T, TurnoverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnovers and returns the data saved in the database.
     * @param {TurnoverCreateManyAndReturnArgs} args - Arguments to create many Turnovers.
     * @example
     * // Create many Turnovers
     * const turnover = await prisma.turnover.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnovers and only return the `id`
     * const turnoverWithIdOnly = await prisma.turnover.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnoverCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnoverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turnover.
     * @param {TurnoverDeleteArgs} args - Arguments to delete one Turnover.
     * @example
     * // Delete one Turnover
     * const Turnover = await prisma.turnover.delete({
     *   where: {
     *     // ... filter to delete one Turnover
     *   }
     * })
     * 
     */
    delete<T extends TurnoverDeleteArgs>(args: SelectSubset<T, TurnoverDeleteArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turnover.
     * @param {TurnoverUpdateArgs} args - Arguments to update one Turnover.
     * @example
     * // Update one Turnover
     * const turnover = await prisma.turnover.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoverUpdateArgs>(args: SelectSubset<T, TurnoverUpdateArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turnovers.
     * @param {TurnoverDeleteManyArgs} args - Arguments to filter Turnovers to delete.
     * @example
     * // Delete a few Turnovers
     * const { count } = await prisma.turnover.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoverDeleteManyArgs>(args?: SelectSubset<T, TurnoverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnovers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnovers
     * const turnover = await prisma.turnover.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoverUpdateManyArgs>(args: SelectSubset<T, TurnoverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnovers and returns the data updated in the database.
     * @param {TurnoverUpdateManyAndReturnArgs} args - Arguments to update many Turnovers.
     * @example
     * // Update many Turnovers
     * const turnover = await prisma.turnover.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turnovers and only return the `id`
     * const turnoverWithIdOnly = await prisma.turnover.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TurnoverUpdateManyAndReturnArgs>(args: SelectSubset<T, TurnoverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turnover.
     * @param {TurnoverUpsertArgs} args - Arguments to update or create a Turnover.
     * @example
     * // Update or create a Turnover
     * const turnover = await prisma.turnover.upsert({
     *   create: {
     *     // ... data to create a Turnover
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turnover we want to update
     *   }
     * })
     */
    upsert<T extends TurnoverUpsertArgs>(args: SelectSubset<T, TurnoverUpsertArgs<ExtArgs>>): Prisma__TurnoverClient<$Result.GetResult<Prisma.$TurnoverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turnovers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverCountArgs} args - Arguments to filter Turnovers to count.
     * @example
     * // Count the number of Turnovers
     * const count = await prisma.turnover.count({
     *   where: {
     *     // ... the filter for the Turnovers we want to count
     *   }
     * })
    **/
    count<T extends TurnoverCountArgs>(
      args?: Subset<T, TurnoverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turnover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoverAggregateArgs>(args: Subset<T, TurnoverAggregateArgs>): Prisma.PrismaPromise<GetTurnoverAggregateType<T>>

    /**
     * Group by Turnover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoverGroupByArgs['orderBy'] }
        : { orderBy?: TurnoverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turnover model
   */
  readonly fields: TurnoverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turnover.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turnover model
   */
  interface TurnoverFieldRefs {
    readonly id: FieldRef<"Turnover", 'Int'>
    readonly playerId: FieldRef<"Turnover", 'Int'>
    readonly timestamp: FieldRef<"Turnover", 'String'>
    readonly type: FieldRef<"Turnover", 'String'>
    readonly createdAt: FieldRef<"Turnover", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turnover findUnique
   */
  export type TurnoverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * Filter, which Turnover to fetch.
     */
    where: TurnoverWhereUniqueInput
  }

  /**
   * Turnover findUniqueOrThrow
   */
  export type TurnoverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * Filter, which Turnover to fetch.
     */
    where: TurnoverWhereUniqueInput
  }

  /**
   * Turnover findFirst
   */
  export type TurnoverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * Filter, which Turnover to fetch.
     */
    where?: TurnoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnovers to fetch.
     */
    orderBy?: TurnoverOrderByWithRelationInput | TurnoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnovers.
     */
    cursor?: TurnoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnovers.
     */
    distinct?: TurnoverScalarFieldEnum | TurnoverScalarFieldEnum[]
  }

  /**
   * Turnover findFirstOrThrow
   */
  export type TurnoverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * Filter, which Turnover to fetch.
     */
    where?: TurnoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnovers to fetch.
     */
    orderBy?: TurnoverOrderByWithRelationInput | TurnoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnovers.
     */
    cursor?: TurnoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnovers.
     */
    distinct?: TurnoverScalarFieldEnum | TurnoverScalarFieldEnum[]
  }

  /**
   * Turnover findMany
   */
  export type TurnoverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * Filter, which Turnovers to fetch.
     */
    where?: TurnoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnovers to fetch.
     */
    orderBy?: TurnoverOrderByWithRelationInput | TurnoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnovers.
     */
    cursor?: TurnoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnovers.
     */
    skip?: number
    distinct?: TurnoverScalarFieldEnum | TurnoverScalarFieldEnum[]
  }

  /**
   * Turnover create
   */
  export type TurnoverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * The data needed to create a Turnover.
     */
    data: XOR<TurnoverCreateInput, TurnoverUncheckedCreateInput>
  }

  /**
   * Turnover createMany
   */
  export type TurnoverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnovers.
     */
    data: TurnoverCreateManyInput | TurnoverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turnover createManyAndReturn
   */
  export type TurnoverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * The data used to create many Turnovers.
     */
    data: TurnoverCreateManyInput | TurnoverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turnover update
   */
  export type TurnoverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * The data needed to update a Turnover.
     */
    data: XOR<TurnoverUpdateInput, TurnoverUncheckedUpdateInput>
    /**
     * Choose, which Turnover to update.
     */
    where: TurnoverWhereUniqueInput
  }

  /**
   * Turnover updateMany
   */
  export type TurnoverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnovers.
     */
    data: XOR<TurnoverUpdateManyMutationInput, TurnoverUncheckedUpdateManyInput>
    /**
     * Filter which Turnovers to update
     */
    where?: TurnoverWhereInput
    /**
     * Limit how many Turnovers to update.
     */
    limit?: number
  }

  /**
   * Turnover updateManyAndReturn
   */
  export type TurnoverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * The data used to update Turnovers.
     */
    data: XOR<TurnoverUpdateManyMutationInput, TurnoverUncheckedUpdateManyInput>
    /**
     * Filter which Turnovers to update
     */
    where?: TurnoverWhereInput
    /**
     * Limit how many Turnovers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turnover upsert
   */
  export type TurnoverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * The filter to search for the Turnover to update in case it exists.
     */
    where: TurnoverWhereUniqueInput
    /**
     * In case the Turnover found by the `where` argument doesn't exist, create a new Turnover with this data.
     */
    create: XOR<TurnoverCreateInput, TurnoverUncheckedCreateInput>
    /**
     * In case the Turnover was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoverUpdateInput, TurnoverUncheckedUpdateInput>
  }

  /**
   * Turnover delete
   */
  export type TurnoverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
    /**
     * Filter which Turnover to delete.
     */
    where: TurnoverWhereUniqueInput
  }

  /**
   * Turnover deleteMany
   */
  export type TurnoverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnovers to delete
     */
    where?: TurnoverWhereInput
    /**
     * Limit how many Turnovers to delete.
     */
    limit?: number
  }

  /**
   * Turnover without action
   */
  export type TurnoverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnover
     */
    select?: TurnoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnover
     */
    omit?: TurnoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoverInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    opp: 'opp',
    dpp: 'dpp',
    touches: 'touches',
    goals: 'goals',
    assists: 'assists',
    defense: 'defense',
    hucks: 'hucks',
    rzto: 'rzto',
    hto: 'hto',
    resetTo: 'resetTo',
    receiverErr: 'receiverErr',
    throwerErr: 'throwerErr',
    team: 'team'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const TurnoverScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    timestamp: 'timestamp',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type TurnoverScalarFieldEnum = (typeof TurnoverScalarFieldEnum)[keyof typeof TurnoverScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    opp?: IntFilter<"Player"> | number
    dpp?: IntFilter<"Player"> | number
    touches?: IntFilter<"Player"> | number
    goals?: IntFilter<"Player"> | number
    assists?: IntFilter<"Player"> | number
    defense?: IntFilter<"Player"> | number
    hucks?: IntFilter<"Player"> | number
    rzto?: IntFilter<"Player"> | number
    hto?: IntFilter<"Player"> | number
    resetTo?: IntFilter<"Player"> | number
    receiverErr?: IntFilter<"Player"> | number
    throwerErr?: IntFilter<"Player"> | number
    team?: StringFilter<"Player"> | string
    turnovers?: TurnoverListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
    team?: SortOrder
    turnovers?: TurnoverOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    opp?: IntFilter<"Player"> | number
    dpp?: IntFilter<"Player"> | number
    touches?: IntFilter<"Player"> | number
    goals?: IntFilter<"Player"> | number
    assists?: IntFilter<"Player"> | number
    defense?: IntFilter<"Player"> | number
    hucks?: IntFilter<"Player"> | number
    rzto?: IntFilter<"Player"> | number
    hto?: IntFilter<"Player"> | number
    resetTo?: IntFilter<"Player"> | number
    receiverErr?: IntFilter<"Player"> | number
    throwerErr?: IntFilter<"Player"> | number
    team?: StringFilter<"Player"> | string
    turnovers?: TurnoverListRelationFilter
  }, "id" | "name">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
    team?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    name?: StringWithAggregatesFilter<"Player"> | string
    opp?: IntWithAggregatesFilter<"Player"> | number
    dpp?: IntWithAggregatesFilter<"Player"> | number
    touches?: IntWithAggregatesFilter<"Player"> | number
    goals?: IntWithAggregatesFilter<"Player"> | number
    assists?: IntWithAggregatesFilter<"Player"> | number
    defense?: IntWithAggregatesFilter<"Player"> | number
    hucks?: IntWithAggregatesFilter<"Player"> | number
    rzto?: IntWithAggregatesFilter<"Player"> | number
    hto?: IntWithAggregatesFilter<"Player"> | number
    resetTo?: IntWithAggregatesFilter<"Player"> | number
    receiverErr?: IntWithAggregatesFilter<"Player"> | number
    throwerErr?: IntWithAggregatesFilter<"Player"> | number
    team?: StringWithAggregatesFilter<"Player"> | string
  }

  export type TurnoverWhereInput = {
    AND?: TurnoverWhereInput | TurnoverWhereInput[]
    OR?: TurnoverWhereInput[]
    NOT?: TurnoverWhereInput | TurnoverWhereInput[]
    id?: IntFilter<"Turnover"> | number
    playerId?: IntFilter<"Turnover"> | number
    timestamp?: StringNullableFilter<"Turnover"> | string | null
    type?: StringFilter<"Turnover"> | string
    createdAt?: DateTimeFilter<"Turnover"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type TurnoverOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    timestamp?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type TurnoverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurnoverWhereInput | TurnoverWhereInput[]
    OR?: TurnoverWhereInput[]
    NOT?: TurnoverWhereInput | TurnoverWhereInput[]
    playerId?: IntFilter<"Turnover"> | number
    timestamp?: StringNullableFilter<"Turnover"> | string | null
    type?: StringFilter<"Turnover"> | string
    createdAt?: DateTimeFilter<"Turnover"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type TurnoverOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    timestamp?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: TurnoverCountOrderByAggregateInput
    _avg?: TurnoverAvgOrderByAggregateInput
    _max?: TurnoverMaxOrderByAggregateInput
    _min?: TurnoverMinOrderByAggregateInput
    _sum?: TurnoverSumOrderByAggregateInput
  }

  export type TurnoverScalarWhereWithAggregatesInput = {
    AND?: TurnoverScalarWhereWithAggregatesInput | TurnoverScalarWhereWithAggregatesInput[]
    OR?: TurnoverScalarWhereWithAggregatesInput[]
    NOT?: TurnoverScalarWhereWithAggregatesInput | TurnoverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turnover"> | number
    playerId?: IntWithAggregatesFilter<"Turnover"> | number
    timestamp?: StringNullableWithAggregatesFilter<"Turnover"> | string | null
    type?: StringWithAggregatesFilter<"Turnover"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Turnover"> | Date | string
  }

  export type PlayerCreateInput = {
    name: string
    opp?: number
    dpp?: number
    touches?: number
    goals?: number
    assists?: number
    defense?: number
    hucks?: number
    rzto?: number
    hto?: number
    resetTo?: number
    receiverErr?: number
    throwerErr?: number
    team: string
    turnovers?: TurnoverCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    opp?: number
    dpp?: number
    touches?: number
    goals?: number
    assists?: number
    defense?: number
    hucks?: number
    rzto?: number
    hto?: number
    resetTo?: number
    receiverErr?: number
    throwerErr?: number
    team: string
    turnovers?: TurnoverUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    opp?: IntFieldUpdateOperationsInput | number
    dpp?: IntFieldUpdateOperationsInput | number
    touches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hucks?: IntFieldUpdateOperationsInput | number
    rzto?: IntFieldUpdateOperationsInput | number
    hto?: IntFieldUpdateOperationsInput | number
    resetTo?: IntFieldUpdateOperationsInput | number
    receiverErr?: IntFieldUpdateOperationsInput | number
    throwerErr?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    turnovers?: TurnoverUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    opp?: IntFieldUpdateOperationsInput | number
    dpp?: IntFieldUpdateOperationsInput | number
    touches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hucks?: IntFieldUpdateOperationsInput | number
    rzto?: IntFieldUpdateOperationsInput | number
    hto?: IntFieldUpdateOperationsInput | number
    resetTo?: IntFieldUpdateOperationsInput | number
    receiverErr?: IntFieldUpdateOperationsInput | number
    throwerErr?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    turnovers?: TurnoverUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    opp?: number
    dpp?: number
    touches?: number
    goals?: number
    assists?: number
    defense?: number
    hucks?: number
    rzto?: number
    hto?: number
    resetTo?: number
    receiverErr?: number
    throwerErr?: number
    team: string
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    opp?: IntFieldUpdateOperationsInput | number
    dpp?: IntFieldUpdateOperationsInput | number
    touches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hucks?: IntFieldUpdateOperationsInput | number
    rzto?: IntFieldUpdateOperationsInput | number
    hto?: IntFieldUpdateOperationsInput | number
    resetTo?: IntFieldUpdateOperationsInput | number
    receiverErr?: IntFieldUpdateOperationsInput | number
    throwerErr?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    opp?: IntFieldUpdateOperationsInput | number
    dpp?: IntFieldUpdateOperationsInput | number
    touches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hucks?: IntFieldUpdateOperationsInput | number
    rzto?: IntFieldUpdateOperationsInput | number
    hto?: IntFieldUpdateOperationsInput | number
    resetTo?: IntFieldUpdateOperationsInput | number
    receiverErr?: IntFieldUpdateOperationsInput | number
    throwerErr?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoverCreateInput = {
    timestamp?: string | null
    type: string
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutTurnoversInput
  }

  export type TurnoverUncheckedCreateInput = {
    id?: number
    playerId: number
    timestamp?: string | null
    type: string
    createdAt?: Date | string
  }

  export type TurnoverUpdateInput = {
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutTurnoversNestedInput
  }

  export type TurnoverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoverCreateManyInput = {
    id?: number
    playerId: number
    timestamp?: string | null
    type: string
    createdAt?: Date | string
  }

  export type TurnoverUpdateManyMutationInput = {
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TurnoverListRelationFilter = {
    every?: TurnoverWhereInput
    some?: TurnoverWhereInput
    none?: TurnoverWhereInput
  }

  export type TurnoverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
    team?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
    team?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
    team?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
    opp?: SortOrder
    dpp?: SortOrder
    touches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    defense?: SortOrder
    hucks?: SortOrder
    rzto?: SortOrder
    hto?: SortOrder
    resetTo?: SortOrder
    receiverErr?: SortOrder
    throwerErr?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TurnoverCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnoverAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
  }

  export type TurnoverMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnoverMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnoverSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TurnoverCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TurnoverCreateWithoutPlayerInput, TurnoverUncheckedCreateWithoutPlayerInput> | TurnoverCreateWithoutPlayerInput[] | TurnoverUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TurnoverCreateOrConnectWithoutPlayerInput | TurnoverCreateOrConnectWithoutPlayerInput[]
    createMany?: TurnoverCreateManyPlayerInputEnvelope
    connect?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
  }

  export type TurnoverUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TurnoverCreateWithoutPlayerInput, TurnoverUncheckedCreateWithoutPlayerInput> | TurnoverCreateWithoutPlayerInput[] | TurnoverUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TurnoverCreateOrConnectWithoutPlayerInput | TurnoverCreateOrConnectWithoutPlayerInput[]
    createMany?: TurnoverCreateManyPlayerInputEnvelope
    connect?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TurnoverUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TurnoverCreateWithoutPlayerInput, TurnoverUncheckedCreateWithoutPlayerInput> | TurnoverCreateWithoutPlayerInput[] | TurnoverUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TurnoverCreateOrConnectWithoutPlayerInput | TurnoverCreateOrConnectWithoutPlayerInput[]
    upsert?: TurnoverUpsertWithWhereUniqueWithoutPlayerInput | TurnoverUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TurnoverCreateManyPlayerInputEnvelope
    set?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    disconnect?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    delete?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    connect?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    update?: TurnoverUpdateWithWhereUniqueWithoutPlayerInput | TurnoverUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TurnoverUpdateManyWithWhereWithoutPlayerInput | TurnoverUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TurnoverScalarWhereInput | TurnoverScalarWhereInput[]
  }

  export type TurnoverUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TurnoverCreateWithoutPlayerInput, TurnoverUncheckedCreateWithoutPlayerInput> | TurnoverCreateWithoutPlayerInput[] | TurnoverUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TurnoverCreateOrConnectWithoutPlayerInput | TurnoverCreateOrConnectWithoutPlayerInput[]
    upsert?: TurnoverUpsertWithWhereUniqueWithoutPlayerInput | TurnoverUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TurnoverCreateManyPlayerInputEnvelope
    set?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    disconnect?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    delete?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    connect?: TurnoverWhereUniqueInput | TurnoverWhereUniqueInput[]
    update?: TurnoverUpdateWithWhereUniqueWithoutPlayerInput | TurnoverUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TurnoverUpdateManyWithWhereWithoutPlayerInput | TurnoverUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TurnoverScalarWhereInput | TurnoverScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutTurnoversInput = {
    create?: XOR<PlayerCreateWithoutTurnoversInput, PlayerUncheckedCreateWithoutTurnoversInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutTurnoversInput
    connect?: PlayerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlayerUpdateOneRequiredWithoutTurnoversNestedInput = {
    create?: XOR<PlayerCreateWithoutTurnoversInput, PlayerUncheckedCreateWithoutTurnoversInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutTurnoversInput
    upsert?: PlayerUpsertWithoutTurnoversInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutTurnoversInput, PlayerUpdateWithoutTurnoversInput>, PlayerUncheckedUpdateWithoutTurnoversInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TurnoverCreateWithoutPlayerInput = {
    timestamp?: string | null
    type: string
    createdAt?: Date | string
  }

  export type TurnoverUncheckedCreateWithoutPlayerInput = {
    id?: number
    timestamp?: string | null
    type: string
    createdAt?: Date | string
  }

  export type TurnoverCreateOrConnectWithoutPlayerInput = {
    where: TurnoverWhereUniqueInput
    create: XOR<TurnoverCreateWithoutPlayerInput, TurnoverUncheckedCreateWithoutPlayerInput>
  }

  export type TurnoverCreateManyPlayerInputEnvelope = {
    data: TurnoverCreateManyPlayerInput | TurnoverCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TurnoverUpsertWithWhereUniqueWithoutPlayerInput = {
    where: TurnoverWhereUniqueInput
    update: XOR<TurnoverUpdateWithoutPlayerInput, TurnoverUncheckedUpdateWithoutPlayerInput>
    create: XOR<TurnoverCreateWithoutPlayerInput, TurnoverUncheckedCreateWithoutPlayerInput>
  }

  export type TurnoverUpdateWithWhereUniqueWithoutPlayerInput = {
    where: TurnoverWhereUniqueInput
    data: XOR<TurnoverUpdateWithoutPlayerInput, TurnoverUncheckedUpdateWithoutPlayerInput>
  }

  export type TurnoverUpdateManyWithWhereWithoutPlayerInput = {
    where: TurnoverScalarWhereInput
    data: XOR<TurnoverUpdateManyMutationInput, TurnoverUncheckedUpdateManyWithoutPlayerInput>
  }

  export type TurnoverScalarWhereInput = {
    AND?: TurnoverScalarWhereInput | TurnoverScalarWhereInput[]
    OR?: TurnoverScalarWhereInput[]
    NOT?: TurnoverScalarWhereInput | TurnoverScalarWhereInput[]
    id?: IntFilter<"Turnover"> | number
    playerId?: IntFilter<"Turnover"> | number
    timestamp?: StringNullableFilter<"Turnover"> | string | null
    type?: StringFilter<"Turnover"> | string
    createdAt?: DateTimeFilter<"Turnover"> | Date | string
  }

  export type PlayerCreateWithoutTurnoversInput = {
    name: string
    opp?: number
    dpp?: number
    touches?: number
    goals?: number
    assists?: number
    defense?: number
    hucks?: number
    rzto?: number
    hto?: number
    resetTo?: number
    receiverErr?: number
    throwerErr?: number
    team: string
  }

  export type PlayerUncheckedCreateWithoutTurnoversInput = {
    id?: number
    name: string
    opp?: number
    dpp?: number
    touches?: number
    goals?: number
    assists?: number
    defense?: number
    hucks?: number
    rzto?: number
    hto?: number
    resetTo?: number
    receiverErr?: number
    throwerErr?: number
    team: string
  }

  export type PlayerCreateOrConnectWithoutTurnoversInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTurnoversInput, PlayerUncheckedCreateWithoutTurnoversInput>
  }

  export type PlayerUpsertWithoutTurnoversInput = {
    update: XOR<PlayerUpdateWithoutTurnoversInput, PlayerUncheckedUpdateWithoutTurnoversInput>
    create: XOR<PlayerCreateWithoutTurnoversInput, PlayerUncheckedCreateWithoutTurnoversInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutTurnoversInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutTurnoversInput, PlayerUncheckedUpdateWithoutTurnoversInput>
  }

  export type PlayerUpdateWithoutTurnoversInput = {
    name?: StringFieldUpdateOperationsInput | string
    opp?: IntFieldUpdateOperationsInput | number
    dpp?: IntFieldUpdateOperationsInput | number
    touches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hucks?: IntFieldUpdateOperationsInput | number
    rzto?: IntFieldUpdateOperationsInput | number
    hto?: IntFieldUpdateOperationsInput | number
    resetTo?: IntFieldUpdateOperationsInput | number
    receiverErr?: IntFieldUpdateOperationsInput | number
    throwerErr?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateWithoutTurnoversInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    opp?: IntFieldUpdateOperationsInput | number
    dpp?: IntFieldUpdateOperationsInput | number
    touches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    hucks?: IntFieldUpdateOperationsInput | number
    rzto?: IntFieldUpdateOperationsInput | number
    hto?: IntFieldUpdateOperationsInput | number
    resetTo?: IntFieldUpdateOperationsInput | number
    receiverErr?: IntFieldUpdateOperationsInput | number
    throwerErr?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoverCreateManyPlayerInput = {
    id?: number
    timestamp?: string | null
    type: string
    createdAt?: Date | string
  }

  export type TurnoverUpdateWithoutPlayerInput = {
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoverUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoverUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}