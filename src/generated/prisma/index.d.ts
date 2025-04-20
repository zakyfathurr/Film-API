
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
 * Model film_genres
 * 
 */
export type film_genres = $Result.DefaultSelection<Prisma.$film_genresPayload>
/**
 * Model film_images
 * 
 */
export type film_images = $Result.DefaultSelection<Prisma.$film_imagesPayload>
/**
 * Model films
 * 
 */
export type films = $Result.DefaultSelection<Prisma.$filmsPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model review_reactions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type review_reactions = $Result.DefaultSelection<Prisma.$review_reactionsPayload>
/**
 * Model reviews
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model user_films
 * 
 */
export type user_films = $Result.DefaultSelection<Prisma.$user_filmsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Film_genres
 * const film_genres = await prisma.film_genres.findMany()
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
   * // Fetch zero or more Film_genres
   * const film_genres = await prisma.film_genres.findMany()
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
   * `prisma.film_genres`: Exposes CRUD operations for the **film_genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_genres
    * const film_genres = await prisma.film_genres.findMany()
    * ```
    */
  get film_genres(): Prisma.film_genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film_images`: Exposes CRUD operations for the **film_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_images
    * const film_images = await prisma.film_images.findMany()
    * ```
    */
  get film_images(): Prisma.film_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.films`: Exposes CRUD operations for the **films** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Films
    * const films = await prisma.films.findMany()
    * ```
    */
  get films(): Prisma.filmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review_reactions`: Exposes CRUD operations for the **review_reactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Review_reactions
    * const review_reactions = await prisma.review_reactions.findMany()
    * ```
    */
  get review_reactions(): Prisma.review_reactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_films`: Exposes CRUD operations for the **user_films** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_films
    * const user_films = await prisma.user_films.findMany()
    * ```
    */
  get user_films(): Prisma.user_filmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
    film_genres: 'film_genres',
    film_images: 'film_images',
    films: 'films',
    genres: 'genres',
    review_reactions: 'review_reactions',
    reviews: 'reviews',
    user_films: 'user_films',
    users: 'users'
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
      modelProps: "film_genres" | "film_images" | "films" | "genres" | "review_reactions" | "reviews" | "user_films" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      film_genres: {
        payload: Prisma.$film_genresPayload<ExtArgs>
        fields: Prisma.film_genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          findFirst: {
            args: Prisma.film_genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          findMany: {
            args: Prisma.film_genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>[]
          }
          create: {
            args: Prisma.film_genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          createMany: {
            args: Prisma.film_genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.film_genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>[]
          }
          delete: {
            args: Prisma.film_genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          update: {
            args: Prisma.film_genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          deleteMany: {
            args: Prisma.film_genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.film_genresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>[]
          }
          upsert: {
            args: Prisma.film_genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          aggregate: {
            args: Prisma.Film_genresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_genres>
          }
          groupBy: {
            args: Prisma.film_genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_genresGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_genresCountArgs<ExtArgs>
            result: $Utils.Optional<Film_genresCountAggregateOutputType> | number
          }
        }
      }
      film_images: {
        payload: Prisma.$film_imagesPayload<ExtArgs>
        fields: Prisma.film_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>
          }
          findFirst: {
            args: Prisma.film_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>
          }
          findMany: {
            args: Prisma.film_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>[]
          }
          create: {
            args: Prisma.film_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>
          }
          createMany: {
            args: Prisma.film_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.film_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>[]
          }
          delete: {
            args: Prisma.film_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>
          }
          update: {
            args: Prisma.film_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>
          }
          deleteMany: {
            args: Prisma.film_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.film_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>[]
          }
          upsert: {
            args: Prisma.film_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_imagesPayload>
          }
          aggregate: {
            args: Prisma.Film_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_images>
          }
          groupBy: {
            args: Prisma.film_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Film_imagesCountAggregateOutputType> | number
          }
        }
      }
      films: {
        payload: Prisma.$filmsPayload<ExtArgs>
        fields: Prisma.filmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          findFirst: {
            args: Prisma.filmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          findMany: {
            args: Prisma.filmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          create: {
            args: Prisma.filmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          createMany: {
            args: Prisma.filmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          delete: {
            args: Prisma.filmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          update: {
            args: Prisma.filmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          deleteMany: {
            args: Prisma.filmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          upsert: {
            args: Prisma.filmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          aggregate: {
            args: Prisma.FilmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilms>
          }
          groupBy: {
            args: Prisma.filmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.filmsCountArgs<ExtArgs>
            result: $Utils.Optional<FilmsCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      review_reactions: {
        payload: Prisma.$review_reactionsPayload<ExtArgs>
        fields: Prisma.review_reactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.review_reactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.review_reactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>
          }
          findFirst: {
            args: Prisma.review_reactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.review_reactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>
          }
          findMany: {
            args: Prisma.review_reactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>[]
          }
          create: {
            args: Prisma.review_reactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>
          }
          createMany: {
            args: Prisma.review_reactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.review_reactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>[]
          }
          delete: {
            args: Prisma.review_reactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>
          }
          update: {
            args: Prisma.review_reactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>
          }
          deleteMany: {
            args: Prisma.review_reactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.review_reactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.review_reactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>[]
          }
          upsert: {
            args: Prisma.review_reactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_reactionsPayload>
          }
          aggregate: {
            args: Prisma.Review_reactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview_reactions>
          }
          groupBy: {
            args: Prisma.review_reactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Review_reactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.review_reactionsCountArgs<ExtArgs>
            result: $Utils.Optional<Review_reactionsCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      user_films: {
        payload: Prisma.$user_filmsPayload<ExtArgs>
        fields: Prisma.user_filmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_filmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_filmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>
          }
          findFirst: {
            args: Prisma.user_filmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_filmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>
          }
          findMany: {
            args: Prisma.user_filmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>[]
          }
          create: {
            args: Prisma.user_filmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>
          }
          createMany: {
            args: Prisma.user_filmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_filmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>[]
          }
          delete: {
            args: Prisma.user_filmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>
          }
          update: {
            args: Prisma.user_filmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>
          }
          deleteMany: {
            args: Prisma.user_filmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_filmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_filmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>[]
          }
          upsert: {
            args: Prisma.user_filmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_filmsPayload>
          }
          aggregate: {
            args: Prisma.User_filmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_films>
          }
          groupBy: {
            args: Prisma.user_filmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_filmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_filmsCountArgs<ExtArgs>
            result: $Utils.Optional<User_filmsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    film_genres?: film_genresOmit
    film_images?: film_imagesOmit
    films?: filmsOmit
    genres?: genresOmit
    review_reactions?: review_reactionsOmit
    reviews?: reviewsOmit
    user_films?: user_filmsOmit
    users?: usersOmit
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
   * Count Type FilmsCountOutputType
   */

  export type FilmsCountOutputType = {
    film_genres: number
    film_images: number
    reviews: number
    user_films: number
  }

  export type FilmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genres?: boolean | FilmsCountOutputTypeCountFilm_genresArgs
    film_images?: boolean | FilmsCountOutputTypeCountFilm_imagesArgs
    reviews?: boolean | FilmsCountOutputTypeCountReviewsArgs
    user_films?: boolean | FilmsCountOutputTypeCountUser_filmsArgs
  }

  // Custom InputTypes
  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmsCountOutputType
     */
    select?: FilmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountFilm_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genresWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountFilm_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_imagesWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountUser_filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filmsWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    film_genres: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genres?: boolean | GenresCountOutputTypeCountFilm_genresArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountFilm_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genresWhereInput
  }


  /**
   * Count Type ReviewsCountOutputType
   */

  export type ReviewsCountOutputType = {
    review_reactions: number
  }

  export type ReviewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review_reactions?: boolean | ReviewsCountOutputTypeCountReview_reactionsArgs
  }

  // Custom InputTypes
  /**
   * ReviewsCountOutputType without action
   */
  export type ReviewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewsCountOutputType
     */
    select?: ReviewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewsCountOutputType without action
   */
  export type ReviewsCountOutputTypeCountReview_reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: review_reactionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    review_reactions: number
    reviews: number
    user_films: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review_reactions?: boolean | UsersCountOutputTypeCountReview_reactionsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    user_films?: boolean | UsersCountOutputTypeCountUser_filmsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReview_reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: review_reactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filmsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model film_genres
   */

  export type AggregateFilm_genres = {
    _count: Film_genresCountAggregateOutputType | null
    _avg: Film_genresAvgAggregateOutputType | null
    _sum: Film_genresSumAggregateOutputType | null
    _min: Film_genresMinAggregateOutputType | null
    _max: Film_genresMaxAggregateOutputType | null
  }

  export type Film_genresAvgAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genresSumAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genresMinAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genresMaxAggregateOutputType = {
    film_id: number | null
    genre_id: number | null
  }

  export type Film_genresCountAggregateOutputType = {
    film_id: number
    genre_id: number
    _all: number
  }


  export type Film_genresAvgAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genresSumAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genresMinAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genresMaxAggregateInputType = {
    film_id?: true
    genre_id?: true
  }

  export type Film_genresCountAggregateInputType = {
    film_id?: true
    genre_id?: true
    _all?: true
  }

  export type Film_genresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genres to aggregate.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_genres
    **/
    _count?: true | Film_genresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_genresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_genresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_genresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_genresMaxAggregateInputType
  }

  export type GetFilm_genresAggregateType<T extends Film_genresAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_genres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_genres[P]>
      : GetScalarType<T[P], AggregateFilm_genres[P]>
  }




  export type film_genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genresWhereInput
    orderBy?: film_genresOrderByWithAggregationInput | film_genresOrderByWithAggregationInput[]
    by: Film_genresScalarFieldEnum[] | Film_genresScalarFieldEnum
    having?: film_genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_genresCountAggregateInputType | true
    _avg?: Film_genresAvgAggregateInputType
    _sum?: Film_genresSumAggregateInputType
    _min?: Film_genresMinAggregateInputType
    _max?: Film_genresMaxAggregateInputType
  }

  export type Film_genresGroupByOutputType = {
    film_id: number
    genre_id: number
    _count: Film_genresCountAggregateOutputType | null
    _avg: Film_genresAvgAggregateOutputType | null
    _sum: Film_genresSumAggregateOutputType | null
    _min: Film_genresMinAggregateOutputType | null
    _max: Film_genresMaxAggregateOutputType | null
  }

  type GetFilm_genresGroupByPayload<T extends film_genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_genresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_genresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_genresGroupByOutputType[P]>
            : GetScalarType<T[P], Film_genresGroupByOutputType[P]>
        }
      >
    >


  export type film_genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    genre_id?: boolean
    films?: boolean | filmsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genres"]>

  export type film_genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    genre_id?: boolean
    films?: boolean | filmsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genres"]>

  export type film_genresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    film_id?: boolean
    genre_id?: boolean
    films?: boolean | filmsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genres"]>

  export type film_genresSelectScalar = {
    film_id?: boolean
    genre_id?: boolean
  }

  export type film_genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"film_id" | "genre_id", ExtArgs["result"]["film_genres"]>
  export type film_genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | filmsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }
  export type film_genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | filmsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }
  export type film_genresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | filmsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }

  export type $film_genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_genres"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs>
      genres: Prisma.$genresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      film_id: number
      genre_id: number
    }, ExtArgs["result"]["film_genres"]>
    composites: {}
  }

  type film_genresGetPayload<S extends boolean | null | undefined | film_genresDefaultArgs> = $Result.GetResult<Prisma.$film_genresPayload, S>

  type film_genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_genresCountAggregateInputType | true
    }

  export interface film_genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_genres'], meta: { name: 'film_genres' } }
    /**
     * Find zero or one Film_genres that matches the filter.
     * @param {film_genresFindUniqueArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_genresFindUniqueArgs>(args: SelectSubset<T, film_genresFindUniqueArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_genresFindUniqueOrThrowArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_genresFindUniqueOrThrowArgs>(args: SelectSubset<T, film_genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresFindFirstArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_genresFindFirstArgs>(args?: SelectSubset<T, film_genresFindFirstArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresFindFirstOrThrowArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_genresFindFirstOrThrowArgs>(args?: SelectSubset<T, film_genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_genres
     * const film_genres = await prisma.film_genres.findMany()
     * 
     * // Get first 10 Film_genres
     * const film_genres = await prisma.film_genres.findMany({ take: 10 })
     * 
     * // Only select the `film_id`
     * const film_genresWithFilm_idOnly = await prisma.film_genres.findMany({ select: { film_id: true } })
     * 
     */
    findMany<T extends film_genresFindManyArgs>(args?: SelectSubset<T, film_genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_genres.
     * @param {film_genresCreateArgs} args - Arguments to create a Film_genres.
     * @example
     * // Create one Film_genres
     * const Film_genres = await prisma.film_genres.create({
     *   data: {
     *     // ... data to create a Film_genres
     *   }
     * })
     * 
     */
    create<T extends film_genresCreateArgs>(args: SelectSubset<T, film_genresCreateArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_genres.
     * @param {film_genresCreateManyArgs} args - Arguments to create many Film_genres.
     * @example
     * // Create many Film_genres
     * const film_genres = await prisma.film_genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_genresCreateManyArgs>(args?: SelectSubset<T, film_genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Film_genres and returns the data saved in the database.
     * @param {film_genresCreateManyAndReturnArgs} args - Arguments to create many Film_genres.
     * @example
     * // Create many Film_genres
     * const film_genres = await prisma.film_genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Film_genres and only return the `film_id`
     * const film_genresWithFilm_idOnly = await prisma.film_genres.createManyAndReturn({
     *   select: { film_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends film_genresCreateManyAndReturnArgs>(args?: SelectSubset<T, film_genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film_genres.
     * @param {film_genresDeleteArgs} args - Arguments to delete one Film_genres.
     * @example
     * // Delete one Film_genres
     * const Film_genres = await prisma.film_genres.delete({
     *   where: {
     *     // ... filter to delete one Film_genres
     *   }
     * })
     * 
     */
    delete<T extends film_genresDeleteArgs>(args: SelectSubset<T, film_genresDeleteArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_genres.
     * @param {film_genresUpdateArgs} args - Arguments to update one Film_genres.
     * @example
     * // Update one Film_genres
     * const film_genres = await prisma.film_genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_genresUpdateArgs>(args: SelectSubset<T, film_genresUpdateArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_genres.
     * @param {film_genresDeleteManyArgs} args - Arguments to filter Film_genres to delete.
     * @example
     * // Delete a few Film_genres
     * const { count } = await prisma.film_genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_genresDeleteManyArgs>(args?: SelectSubset<T, film_genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_genres
     * const film_genres = await prisma.film_genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_genresUpdateManyArgs>(args: SelectSubset<T, film_genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_genres and returns the data updated in the database.
     * @param {film_genresUpdateManyAndReturnArgs} args - Arguments to update many Film_genres.
     * @example
     * // Update many Film_genres
     * const film_genres = await prisma.film_genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Film_genres and only return the `film_id`
     * const film_genresWithFilm_idOnly = await prisma.film_genres.updateManyAndReturn({
     *   select: { film_id: true },
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
    updateManyAndReturn<T extends film_genresUpdateManyAndReturnArgs>(args: SelectSubset<T, film_genresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film_genres.
     * @param {film_genresUpsertArgs} args - Arguments to update or create a Film_genres.
     * @example
     * // Update or create a Film_genres
     * const film_genres = await prisma.film_genres.upsert({
     *   create: {
     *     // ... data to create a Film_genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_genres we want to update
     *   }
     * })
     */
    upsert<T extends film_genresUpsertArgs>(args: SelectSubset<T, film_genresUpsertArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresCountArgs} args - Arguments to filter Film_genres to count.
     * @example
     * // Count the number of Film_genres
     * const count = await prisma.film_genres.count({
     *   where: {
     *     // ... the filter for the Film_genres we want to count
     *   }
     * })
    **/
    count<T extends film_genresCountArgs>(
      args?: Subset<T, film_genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_genresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_genresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Film_genresAggregateArgs>(args: Subset<T, Film_genresAggregateArgs>): Prisma.PrismaPromise<GetFilm_genresAggregateType<T>>

    /**
     * Group by Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresGroupByArgs} args - Group by arguments.
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
      T extends film_genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_genresGroupByArgs['orderBy'] }
        : { orderBy?: film_genresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, film_genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_genresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_genres model
   */
  readonly fields: film_genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends filmsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filmsDefaultArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genres<T extends genresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, genresDefaultArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the film_genres model
   */
  interface film_genresFieldRefs {
    readonly film_id: FieldRef<"film_genres", 'Int'>
    readonly genre_id: FieldRef<"film_genres", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * film_genres findUnique
   */
  export type film_genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres findUniqueOrThrow
   */
  export type film_genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres findFirst
   */
  export type film_genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_genres.
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * film_genres findFirstOrThrow
   */
  export type film_genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_genres.
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * film_genres findMany
   */
  export type film_genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_genres.
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * film_genres create
   */
  export type film_genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * The data needed to create a film_genres.
     */
    data: XOR<film_genresCreateInput, film_genresUncheckedCreateInput>
  }

  /**
   * film_genres createMany
   */
  export type film_genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_genres.
     */
    data: film_genresCreateManyInput | film_genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_genres createManyAndReturn
   */
  export type film_genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * The data used to create many film_genres.
     */
    data: film_genresCreateManyInput | film_genresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_genres update
   */
  export type film_genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * The data needed to update a film_genres.
     */
    data: XOR<film_genresUpdateInput, film_genresUncheckedUpdateInput>
    /**
     * Choose, which film_genres to update.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres updateMany
   */
  export type film_genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_genres.
     */
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyInput>
    /**
     * Filter which film_genres to update
     */
    where?: film_genresWhereInput
    /**
     * Limit how many film_genres to update.
     */
    limit?: number
  }

  /**
   * film_genres updateManyAndReturn
   */
  export type film_genresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * The data used to update film_genres.
     */
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyInput>
    /**
     * Filter which film_genres to update
     */
    where?: film_genresWhereInput
    /**
     * Limit how many film_genres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_genres upsert
   */
  export type film_genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * The filter to search for the film_genres to update in case it exists.
     */
    where: film_genresWhereUniqueInput
    /**
     * In case the film_genres found by the `where` argument doesn't exist, create a new film_genres with this data.
     */
    create: XOR<film_genresCreateInput, film_genresUncheckedCreateInput>
    /**
     * In case the film_genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_genresUpdateInput, film_genresUncheckedUpdateInput>
  }

  /**
   * film_genres delete
   */
  export type film_genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter which film_genres to delete.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres deleteMany
   */
  export type film_genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genres to delete
     */
    where?: film_genresWhereInput
    /**
     * Limit how many film_genres to delete.
     */
    limit?: number
  }

  /**
   * film_genres without action
   */
  export type film_genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
  }


  /**
   * Model film_images
   */

  export type AggregateFilm_images = {
    _count: Film_imagesCountAggregateOutputType | null
    _avg: Film_imagesAvgAggregateOutputType | null
    _sum: Film_imagesSumAggregateOutputType | null
    _min: Film_imagesMinAggregateOutputType | null
    _max: Film_imagesMaxAggregateOutputType | null
  }

  export type Film_imagesAvgAggregateOutputType = {
    id: number | null
    film_id: number | null
  }

  export type Film_imagesSumAggregateOutputType = {
    id: number | null
    film_id: number | null
  }

  export type Film_imagesMinAggregateOutputType = {
    id: number | null
    film_id: number | null
    image_url: string | null
    created_at: Date | null
  }

  export type Film_imagesMaxAggregateOutputType = {
    id: number | null
    film_id: number | null
    image_url: string | null
    created_at: Date | null
  }

  export type Film_imagesCountAggregateOutputType = {
    id: number
    film_id: number
    image_url: number
    created_at: number
    _all: number
  }


  export type Film_imagesAvgAggregateInputType = {
    id?: true
    film_id?: true
  }

  export type Film_imagesSumAggregateInputType = {
    id?: true
    film_id?: true
  }

  export type Film_imagesMinAggregateInputType = {
    id?: true
    film_id?: true
    image_url?: true
    created_at?: true
  }

  export type Film_imagesMaxAggregateInputType = {
    id?: true
    film_id?: true
    image_url?: true
    created_at?: true
  }

  export type Film_imagesCountAggregateInputType = {
    id?: true
    film_id?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type Film_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_images to aggregate.
     */
    where?: film_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_images to fetch.
     */
    orderBy?: film_imagesOrderByWithRelationInput | film_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_images
    **/
    _count?: true | Film_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_imagesMaxAggregateInputType
  }

  export type GetFilm_imagesAggregateType<T extends Film_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_images[P]>
      : GetScalarType<T[P], AggregateFilm_images[P]>
  }




  export type film_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_imagesWhereInput
    orderBy?: film_imagesOrderByWithAggregationInput | film_imagesOrderByWithAggregationInput[]
    by: Film_imagesScalarFieldEnum[] | Film_imagesScalarFieldEnum
    having?: film_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_imagesCountAggregateInputType | true
    _avg?: Film_imagesAvgAggregateInputType
    _sum?: Film_imagesSumAggregateInputType
    _min?: Film_imagesMinAggregateInputType
    _max?: Film_imagesMaxAggregateInputType
  }

  export type Film_imagesGroupByOutputType = {
    id: number
    film_id: number | null
    image_url: string
    created_at: Date | null
    _count: Film_imagesCountAggregateOutputType | null
    _avg: Film_imagesAvgAggregateOutputType | null
    _sum: Film_imagesSumAggregateOutputType | null
    _min: Film_imagesMinAggregateOutputType | null
    _max: Film_imagesMaxAggregateOutputType | null
  }

  type GetFilm_imagesGroupByPayload<T extends film_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Film_imagesGroupByOutputType[P]>
        }
      >
    >


  export type film_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    image_url?: boolean
    created_at?: boolean
    films?: boolean | film_images$filmsArgs<ExtArgs>
  }, ExtArgs["result"]["film_images"]>

  export type film_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    image_url?: boolean
    created_at?: boolean
    films?: boolean | film_images$filmsArgs<ExtArgs>
  }, ExtArgs["result"]["film_images"]>

  export type film_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    image_url?: boolean
    created_at?: boolean
    films?: boolean | film_images$filmsArgs<ExtArgs>
  }, ExtArgs["result"]["film_images"]>

  export type film_imagesSelectScalar = {
    id?: boolean
    film_id?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type film_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film_id" | "image_url" | "created_at", ExtArgs["result"]["film_images"]>
  export type film_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | film_images$filmsArgs<ExtArgs>
  }
  export type film_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | film_images$filmsArgs<ExtArgs>
  }
  export type film_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | film_images$filmsArgs<ExtArgs>
  }

  export type $film_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_images"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film_id: number | null
      image_url: string
      created_at: Date | null
    }, ExtArgs["result"]["film_images"]>
    composites: {}
  }

  type film_imagesGetPayload<S extends boolean | null | undefined | film_imagesDefaultArgs> = $Result.GetResult<Prisma.$film_imagesPayload, S>

  type film_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_imagesCountAggregateInputType | true
    }

  export interface film_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_images'], meta: { name: 'film_images' } }
    /**
     * Find zero or one Film_images that matches the filter.
     * @param {film_imagesFindUniqueArgs} args - Arguments to find a Film_images
     * @example
     * // Get one Film_images
     * const film_images = await prisma.film_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_imagesFindUniqueArgs>(args: SelectSubset<T, film_imagesFindUniqueArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_imagesFindUniqueOrThrowArgs} args - Arguments to find a Film_images
     * @example
     * // Get one Film_images
     * const film_images = await prisma.film_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, film_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_imagesFindFirstArgs} args - Arguments to find a Film_images
     * @example
     * // Get one Film_images
     * const film_images = await prisma.film_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_imagesFindFirstArgs>(args?: SelectSubset<T, film_imagesFindFirstArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_imagesFindFirstOrThrowArgs} args - Arguments to find a Film_images
     * @example
     * // Get one Film_images
     * const film_images = await prisma.film_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, film_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_images
     * const film_images = await prisma.film_images.findMany()
     * 
     * // Get first 10 Film_images
     * const film_images = await prisma.film_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const film_imagesWithIdOnly = await prisma.film_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends film_imagesFindManyArgs>(args?: SelectSubset<T, film_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_images.
     * @param {film_imagesCreateArgs} args - Arguments to create a Film_images.
     * @example
     * // Create one Film_images
     * const Film_images = await prisma.film_images.create({
     *   data: {
     *     // ... data to create a Film_images
     *   }
     * })
     * 
     */
    create<T extends film_imagesCreateArgs>(args: SelectSubset<T, film_imagesCreateArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_images.
     * @param {film_imagesCreateManyArgs} args - Arguments to create many Film_images.
     * @example
     * // Create many Film_images
     * const film_images = await prisma.film_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_imagesCreateManyArgs>(args?: SelectSubset<T, film_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Film_images and returns the data saved in the database.
     * @param {film_imagesCreateManyAndReturnArgs} args - Arguments to create many Film_images.
     * @example
     * // Create many Film_images
     * const film_images = await prisma.film_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Film_images and only return the `id`
     * const film_imagesWithIdOnly = await prisma.film_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends film_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, film_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film_images.
     * @param {film_imagesDeleteArgs} args - Arguments to delete one Film_images.
     * @example
     * // Delete one Film_images
     * const Film_images = await prisma.film_images.delete({
     *   where: {
     *     // ... filter to delete one Film_images
     *   }
     * })
     * 
     */
    delete<T extends film_imagesDeleteArgs>(args: SelectSubset<T, film_imagesDeleteArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_images.
     * @param {film_imagesUpdateArgs} args - Arguments to update one Film_images.
     * @example
     * // Update one Film_images
     * const film_images = await prisma.film_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_imagesUpdateArgs>(args: SelectSubset<T, film_imagesUpdateArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_images.
     * @param {film_imagesDeleteManyArgs} args - Arguments to filter Film_images to delete.
     * @example
     * // Delete a few Film_images
     * const { count } = await prisma.film_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_imagesDeleteManyArgs>(args?: SelectSubset<T, film_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_images
     * const film_images = await prisma.film_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_imagesUpdateManyArgs>(args: SelectSubset<T, film_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_images and returns the data updated in the database.
     * @param {film_imagesUpdateManyAndReturnArgs} args - Arguments to update many Film_images.
     * @example
     * // Update many Film_images
     * const film_images = await prisma.film_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Film_images and only return the `id`
     * const film_imagesWithIdOnly = await prisma.film_images.updateManyAndReturn({
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
    updateManyAndReturn<T extends film_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, film_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film_images.
     * @param {film_imagesUpsertArgs} args - Arguments to update or create a Film_images.
     * @example
     * // Update or create a Film_images
     * const film_images = await prisma.film_images.upsert({
     *   create: {
     *     // ... data to create a Film_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_images we want to update
     *   }
     * })
     */
    upsert<T extends film_imagesUpsertArgs>(args: SelectSubset<T, film_imagesUpsertArgs<ExtArgs>>): Prisma__film_imagesClient<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_imagesCountArgs} args - Arguments to filter Film_images to count.
     * @example
     * // Count the number of Film_images
     * const count = await prisma.film_images.count({
     *   where: {
     *     // ... the filter for the Film_images we want to count
     *   }
     * })
    **/
    count<T extends film_imagesCountArgs>(
      args?: Subset<T, film_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Film_imagesAggregateArgs>(args: Subset<T, Film_imagesAggregateArgs>): Prisma.PrismaPromise<GetFilm_imagesAggregateType<T>>

    /**
     * Group by Film_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_imagesGroupByArgs} args - Group by arguments.
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
      T extends film_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_imagesGroupByArgs['orderBy'] }
        : { orderBy?: film_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, film_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_images model
   */
  readonly fields: film_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends film_images$filmsArgs<ExtArgs> = {}>(args?: Subset<T, film_images$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the film_images model
   */
  interface film_imagesFieldRefs {
    readonly id: FieldRef<"film_images", 'Int'>
    readonly film_id: FieldRef<"film_images", 'Int'>
    readonly image_url: FieldRef<"film_images", 'String'>
    readonly created_at: FieldRef<"film_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * film_images findUnique
   */
  export type film_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * Filter, which film_images to fetch.
     */
    where: film_imagesWhereUniqueInput
  }

  /**
   * film_images findUniqueOrThrow
   */
  export type film_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * Filter, which film_images to fetch.
     */
    where: film_imagesWhereUniqueInput
  }

  /**
   * film_images findFirst
   */
  export type film_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * Filter, which film_images to fetch.
     */
    where?: film_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_images to fetch.
     */
    orderBy?: film_imagesOrderByWithRelationInput | film_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_images.
     */
    cursor?: film_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_images.
     */
    distinct?: Film_imagesScalarFieldEnum | Film_imagesScalarFieldEnum[]
  }

  /**
   * film_images findFirstOrThrow
   */
  export type film_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * Filter, which film_images to fetch.
     */
    where?: film_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_images to fetch.
     */
    orderBy?: film_imagesOrderByWithRelationInput | film_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_images.
     */
    cursor?: film_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_images.
     */
    distinct?: Film_imagesScalarFieldEnum | Film_imagesScalarFieldEnum[]
  }

  /**
   * film_images findMany
   */
  export type film_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * Filter, which film_images to fetch.
     */
    where?: film_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_images to fetch.
     */
    orderBy?: film_imagesOrderByWithRelationInput | film_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_images.
     */
    cursor?: film_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_images.
     */
    skip?: number
    distinct?: Film_imagesScalarFieldEnum | Film_imagesScalarFieldEnum[]
  }

  /**
   * film_images create
   */
  export type film_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a film_images.
     */
    data: XOR<film_imagesCreateInput, film_imagesUncheckedCreateInput>
  }

  /**
   * film_images createMany
   */
  export type film_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_images.
     */
    data: film_imagesCreateManyInput | film_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_images createManyAndReturn
   */
  export type film_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many film_images.
     */
    data: film_imagesCreateManyInput | film_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_images update
   */
  export type film_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a film_images.
     */
    data: XOR<film_imagesUpdateInput, film_imagesUncheckedUpdateInput>
    /**
     * Choose, which film_images to update.
     */
    where: film_imagesWhereUniqueInput
  }

  /**
   * film_images updateMany
   */
  export type film_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_images.
     */
    data: XOR<film_imagesUpdateManyMutationInput, film_imagesUncheckedUpdateManyInput>
    /**
     * Filter which film_images to update
     */
    where?: film_imagesWhereInput
    /**
     * Limit how many film_images to update.
     */
    limit?: number
  }

  /**
   * film_images updateManyAndReturn
   */
  export type film_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * The data used to update film_images.
     */
    data: XOR<film_imagesUpdateManyMutationInput, film_imagesUncheckedUpdateManyInput>
    /**
     * Filter which film_images to update
     */
    where?: film_imagesWhereInput
    /**
     * Limit how many film_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_images upsert
   */
  export type film_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the film_images to update in case it exists.
     */
    where: film_imagesWhereUniqueInput
    /**
     * In case the film_images found by the `where` argument doesn't exist, create a new film_images with this data.
     */
    create: XOR<film_imagesCreateInput, film_imagesUncheckedCreateInput>
    /**
     * In case the film_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_imagesUpdateInput, film_imagesUncheckedUpdateInput>
  }

  /**
   * film_images delete
   */
  export type film_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    /**
     * Filter which film_images to delete.
     */
    where: film_imagesWhereUniqueInput
  }

  /**
   * film_images deleteMany
   */
  export type film_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_images to delete
     */
    where?: film_imagesWhereInput
    /**
     * Limit how many film_images to delete.
     */
    limit?: number
  }

  /**
   * film_images.films
   */
  export type film_images$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * film_images without action
   */
  export type film_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
  }


  /**
   * Model films
   */

  export type AggregateFilms = {
    _count: FilmsCountAggregateOutputType | null
    _avg: FilmsAvgAggregateOutputType | null
    _sum: FilmsSumAggregateOutputType | null
    _min: FilmsMinAggregateOutputType | null
    _max: FilmsMaxAggregateOutputType | null
  }

  export type FilmsAvgAggregateOutputType = {
    id: number | null
    total_episodes: number | null
  }

  export type FilmsSumAggregateOutputType = {
    id: number | null
    total_episodes: number | null
  }

  export type FilmsMinAggregateOutputType = {
    id: number | null
    title: string | null
    synopsis: string | null
    status: string | null
    total_episodes: number | null
    release_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FilmsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    synopsis: string | null
    status: string | null
    total_episodes: number | null
    release_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FilmsCountAggregateOutputType = {
    id: number
    title: number
    synopsis: number
    status: number
    total_episodes: number
    release_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FilmsAvgAggregateInputType = {
    id?: true
    total_episodes?: true
  }

  export type FilmsSumAggregateInputType = {
    id?: true
    total_episodes?: true
  }

  export type FilmsMinAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    status?: true
    total_episodes?: true
    release_date?: true
    created_at?: true
    updated_at?: true
  }

  export type FilmsMaxAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    status?: true
    total_episodes?: true
    release_date?: true
    created_at?: true
    updated_at?: true
  }

  export type FilmsCountAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    status?: true
    total_episodes?: true
    release_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FilmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to aggregate.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned films
    **/
    _count?: true | FilmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmsMaxAggregateInputType
  }

  export type GetFilmsAggregateType<T extends FilmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFilms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilms[P]>
      : GetScalarType<T[P], AggregateFilms[P]>
  }




  export type filmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmsWhereInput
    orderBy?: filmsOrderByWithAggregationInput | filmsOrderByWithAggregationInput[]
    by: FilmsScalarFieldEnum[] | FilmsScalarFieldEnum
    having?: filmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmsCountAggregateInputType | true
    _avg?: FilmsAvgAggregateInputType
    _sum?: FilmsSumAggregateInputType
    _min?: FilmsMinAggregateInputType
    _max?: FilmsMaxAggregateInputType
  }

  export type FilmsGroupByOutputType = {
    id: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date
    created_at: Date | null
    updated_at: Date | null
    _count: FilmsCountAggregateOutputType | null
    _avg: FilmsAvgAggregateOutputType | null
    _sum: FilmsSumAggregateOutputType | null
    _min: FilmsMinAggregateOutputType | null
    _max: FilmsMaxAggregateOutputType | null
  }

  type GetFilmsGroupByPayload<T extends filmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmsGroupByOutputType[P]>
            : GetScalarType<T[P], FilmsGroupByOutputType[P]>
        }
      >
    >


  export type filmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    status?: boolean
    total_episodes?: boolean
    release_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    film_genres?: boolean | films$film_genresArgs<ExtArgs>
    film_images?: boolean | films$film_imagesArgs<ExtArgs>
    reviews?: boolean | films$reviewsArgs<ExtArgs>
    user_films?: boolean | films$user_filmsArgs<ExtArgs>
    _count?: boolean | FilmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["films"]>

  export type filmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    status?: boolean
    total_episodes?: boolean
    release_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["films"]>

  export type filmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    status?: boolean
    total_episodes?: boolean
    release_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["films"]>

  export type filmsSelectScalar = {
    id?: boolean
    title?: boolean
    synopsis?: boolean
    status?: boolean
    total_episodes?: boolean
    release_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type filmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "synopsis" | "status" | "total_episodes" | "release_date" | "created_at" | "updated_at", ExtArgs["result"]["films"]>
  export type filmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genres?: boolean | films$film_genresArgs<ExtArgs>
    film_images?: boolean | films$film_imagesArgs<ExtArgs>
    reviews?: boolean | films$reviewsArgs<ExtArgs>
    user_films?: boolean | films$user_filmsArgs<ExtArgs>
    _count?: boolean | FilmsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type filmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type filmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $filmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "films"
    objects: {
      film_genres: Prisma.$film_genresPayload<ExtArgs>[]
      film_images: Prisma.$film_imagesPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      user_films: Prisma.$user_filmsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      synopsis: string
      status: string
      total_episodes: number
      release_date: Date
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["films"]>
    composites: {}
  }

  type filmsGetPayload<S extends boolean | null | undefined | filmsDefaultArgs> = $Result.GetResult<Prisma.$filmsPayload, S>

  type filmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmsCountAggregateInputType | true
    }

  export interface filmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['films'], meta: { name: 'films' } }
    /**
     * Find zero or one Films that matches the filter.
     * @param {filmsFindUniqueArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filmsFindUniqueArgs>(args: SelectSubset<T, filmsFindUniqueArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Films that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filmsFindUniqueOrThrowArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filmsFindUniqueOrThrowArgs>(args: SelectSubset<T, filmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindFirstArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filmsFindFirstArgs>(args?: SelectSubset<T, filmsFindFirstArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Films that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindFirstOrThrowArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filmsFindFirstOrThrowArgs>(args?: SelectSubset<T, filmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Films
     * const films = await prisma.films.findMany()
     * 
     * // Get first 10 Films
     * const films = await prisma.films.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmsWithIdOnly = await prisma.films.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filmsFindManyArgs>(args?: SelectSubset<T, filmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Films.
     * @param {filmsCreateArgs} args - Arguments to create a Films.
     * @example
     * // Create one Films
     * const Films = await prisma.films.create({
     *   data: {
     *     // ... data to create a Films
     *   }
     * })
     * 
     */
    create<T extends filmsCreateArgs>(args: SelectSubset<T, filmsCreateArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Films.
     * @param {filmsCreateManyArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const films = await prisma.films.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filmsCreateManyArgs>(args?: SelectSubset<T, filmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Films and returns the data saved in the database.
     * @param {filmsCreateManyAndReturnArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const films = await prisma.films.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Films and only return the `id`
     * const filmsWithIdOnly = await prisma.films.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filmsCreateManyAndReturnArgs>(args?: SelectSubset<T, filmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Films.
     * @param {filmsDeleteArgs} args - Arguments to delete one Films.
     * @example
     * // Delete one Films
     * const Films = await prisma.films.delete({
     *   where: {
     *     // ... filter to delete one Films
     *   }
     * })
     * 
     */
    delete<T extends filmsDeleteArgs>(args: SelectSubset<T, filmsDeleteArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Films.
     * @param {filmsUpdateArgs} args - Arguments to update one Films.
     * @example
     * // Update one Films
     * const films = await prisma.films.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filmsUpdateArgs>(args: SelectSubset<T, filmsUpdateArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Films.
     * @param {filmsDeleteManyArgs} args - Arguments to filter Films to delete.
     * @example
     * // Delete a few Films
     * const { count } = await prisma.films.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filmsDeleteManyArgs>(args?: SelectSubset<T, filmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Films
     * const films = await prisma.films.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filmsUpdateManyArgs>(args: SelectSubset<T, filmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films and returns the data updated in the database.
     * @param {filmsUpdateManyAndReturnArgs} args - Arguments to update many Films.
     * @example
     * // Update many Films
     * const films = await prisma.films.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Films and only return the `id`
     * const filmsWithIdOnly = await prisma.films.updateManyAndReturn({
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
    updateManyAndReturn<T extends filmsUpdateManyAndReturnArgs>(args: SelectSubset<T, filmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Films.
     * @param {filmsUpsertArgs} args - Arguments to update or create a Films.
     * @example
     * // Update or create a Films
     * const films = await prisma.films.upsert({
     *   create: {
     *     // ... data to create a Films
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Films we want to update
     *   }
     * })
     */
    upsert<T extends filmsUpsertArgs>(args: SelectSubset<T, filmsUpsertArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsCountArgs} args - Arguments to filter Films to count.
     * @example
     * // Count the number of Films
     * const count = await prisma.films.count({
     *   where: {
     *     // ... the filter for the Films we want to count
     *   }
     * })
    **/
    count<T extends filmsCountArgs>(
      args?: Subset<T, filmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilmsAggregateArgs>(args: Subset<T, FilmsAggregateArgs>): Prisma.PrismaPromise<GetFilmsAggregateType<T>>

    /**
     * Group by Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsGroupByArgs} args - Group by arguments.
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
      T extends filmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filmsGroupByArgs['orderBy'] }
        : { orderBy?: filmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, filmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the films model
   */
  readonly fields: filmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for films.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film_genres<T extends films$film_genresArgs<ExtArgs> = {}>(args?: Subset<T, films$film_genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    film_images<T extends films$film_imagesArgs<ExtArgs> = {}>(args?: Subset<T, films$film_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends films$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, films$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_films<T extends films$user_filmsArgs<ExtArgs> = {}>(args?: Subset<T, films$user_filmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the films model
   */
  interface filmsFieldRefs {
    readonly id: FieldRef<"films", 'Int'>
    readonly title: FieldRef<"films", 'String'>
    readonly synopsis: FieldRef<"films", 'String'>
    readonly status: FieldRef<"films", 'String'>
    readonly total_episodes: FieldRef<"films", 'Int'>
    readonly release_date: FieldRef<"films", 'DateTime'>
    readonly created_at: FieldRef<"films", 'DateTime'>
    readonly updated_at: FieldRef<"films", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * films findUnique
   */
  export type filmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films findUniqueOrThrow
   */
  export type filmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films findFirst
   */
  export type filmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films findFirstOrThrow
   */
  export type filmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films findMany
   */
  export type filmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films create
   */
  export type filmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The data needed to create a films.
     */
    data: XOR<filmsCreateInput, filmsUncheckedCreateInput>
  }

  /**
   * films createMany
   */
  export type filmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many films.
     */
    data: filmsCreateManyInput | filmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * films createManyAndReturn
   */
  export type filmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * The data used to create many films.
     */
    data: filmsCreateManyInput | filmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * films update
   */
  export type filmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The data needed to update a films.
     */
    data: XOR<filmsUpdateInput, filmsUncheckedUpdateInput>
    /**
     * Choose, which films to update.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films updateMany
   */
  export type filmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update films.
     */
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
  }

  /**
   * films updateManyAndReturn
   */
  export type filmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * The data used to update films.
     */
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
  }

  /**
   * films upsert
   */
  export type filmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The filter to search for the films to update in case it exists.
     */
    where: filmsWhereUniqueInput
    /**
     * In case the films found by the `where` argument doesn't exist, create a new films with this data.
     */
    create: XOR<filmsCreateInput, filmsUncheckedCreateInput>
    /**
     * In case the films was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filmsUpdateInput, filmsUncheckedUpdateInput>
  }

  /**
   * films delete
   */
  export type filmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter which films to delete.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films deleteMany
   */
  export type filmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to delete
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to delete.
     */
    limit?: number
  }

  /**
   * films.film_genres
   */
  export type films$film_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    where?: film_genresWhereInput
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    cursor?: film_genresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * films.film_images
   */
  export type films$film_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_images
     */
    select?: film_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_images
     */
    omit?: film_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_imagesInclude<ExtArgs> | null
    where?: film_imagesWhereInput
    orderBy?: film_imagesOrderByWithRelationInput | film_imagesOrderByWithRelationInput[]
    cursor?: film_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_imagesScalarFieldEnum | Film_imagesScalarFieldEnum[]
  }

  /**
   * films.reviews
   */
  export type films$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * films.user_films
   */
  export type films$user_filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    where?: user_filmsWhereInput
    orderBy?: user_filmsOrderByWithRelationInput | user_filmsOrderByWithRelationInput[]
    cursor?: user_filmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_filmsScalarFieldEnum | User_filmsScalarFieldEnum[]
  }

  /**
   * films without action
   */
  export type filmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    film_genres?: boolean | genres$film_genresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["genres"]>
  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genres?: boolean | genres$film_genresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      film_genres: Prisma.$film_genresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.updateManyAndReturn({
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
    updateManyAndReturn<T extends genresUpdateManyAndReturnArgs>(args: SelectSubset<T, genresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
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
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film_genres<T extends genres$film_genresArgs<ExtArgs> = {}>(args?: Subset<T, genres$film_genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the genres model
   */
  interface genresFieldRefs {
    readonly id: FieldRef<"genres", 'Int'>
    readonly name: FieldRef<"genres", 'String'>
    readonly created_at: FieldRef<"genres", 'DateTime'>
    readonly updated_at: FieldRef<"genres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres updateManyAndReturn
   */
  export type genresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genres.film_genres
   */
  export type genres$film_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    where?: film_genresWhereInput
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    cursor?: film_genresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model review_reactions
   */

  export type AggregateReview_reactions = {
    _count: Review_reactionsCountAggregateOutputType | null
    _avg: Review_reactionsAvgAggregateOutputType | null
    _sum: Review_reactionsSumAggregateOutputType | null
    _min: Review_reactionsMinAggregateOutputType | null
    _max: Review_reactionsMaxAggregateOutputType | null
  }

  export type Review_reactionsAvgAggregateOutputType = {
    user_id: number | null
    review_id: number | null
  }

  export type Review_reactionsSumAggregateOutputType = {
    user_id: number | null
    review_id: number | null
  }

  export type Review_reactionsMinAggregateOutputType = {
    user_id: number | null
    review_id: number | null
    reaction_type: string | null
    created_at: Date | null
  }

  export type Review_reactionsMaxAggregateOutputType = {
    user_id: number | null
    review_id: number | null
    reaction_type: string | null
    created_at: Date | null
  }

  export type Review_reactionsCountAggregateOutputType = {
    user_id: number
    review_id: number
    reaction_type: number
    created_at: number
    _all: number
  }


  export type Review_reactionsAvgAggregateInputType = {
    user_id?: true
    review_id?: true
  }

  export type Review_reactionsSumAggregateInputType = {
    user_id?: true
    review_id?: true
  }

  export type Review_reactionsMinAggregateInputType = {
    user_id?: true
    review_id?: true
    reaction_type?: true
    created_at?: true
  }

  export type Review_reactionsMaxAggregateInputType = {
    user_id?: true
    review_id?: true
    reaction_type?: true
    created_at?: true
  }

  export type Review_reactionsCountAggregateInputType = {
    user_id?: true
    review_id?: true
    reaction_type?: true
    created_at?: true
    _all?: true
  }

  export type Review_reactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review_reactions to aggregate.
     */
    where?: review_reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_reactions to fetch.
     */
    orderBy?: review_reactionsOrderByWithRelationInput | review_reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: review_reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned review_reactions
    **/
    _count?: true | Review_reactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Review_reactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Review_reactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Review_reactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Review_reactionsMaxAggregateInputType
  }

  export type GetReview_reactionsAggregateType<T extends Review_reactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateReview_reactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview_reactions[P]>
      : GetScalarType<T[P], AggregateReview_reactions[P]>
  }




  export type review_reactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: review_reactionsWhereInput
    orderBy?: review_reactionsOrderByWithAggregationInput | review_reactionsOrderByWithAggregationInput[]
    by: Review_reactionsScalarFieldEnum[] | Review_reactionsScalarFieldEnum
    having?: review_reactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Review_reactionsCountAggregateInputType | true
    _avg?: Review_reactionsAvgAggregateInputType
    _sum?: Review_reactionsSumAggregateInputType
    _min?: Review_reactionsMinAggregateInputType
    _max?: Review_reactionsMaxAggregateInputType
  }

  export type Review_reactionsGroupByOutputType = {
    user_id: number
    review_id: number
    reaction_type: string | null
    created_at: Date | null
    _count: Review_reactionsCountAggregateOutputType | null
    _avg: Review_reactionsAvgAggregateOutputType | null
    _sum: Review_reactionsSumAggregateOutputType | null
    _min: Review_reactionsMinAggregateOutputType | null
    _max: Review_reactionsMaxAggregateOutputType | null
  }

  type GetReview_reactionsGroupByPayload<T extends review_reactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Review_reactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Review_reactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Review_reactionsGroupByOutputType[P]>
            : GetScalarType<T[P], Review_reactionsGroupByOutputType[P]>
        }
      >
    >


  export type review_reactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    review_id?: boolean
    reaction_type?: boolean
    created_at?: boolean
    reviews?: boolean | reviewsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review_reactions"]>

  export type review_reactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    review_id?: boolean
    reaction_type?: boolean
    created_at?: boolean
    reviews?: boolean | reviewsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review_reactions"]>

  export type review_reactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    review_id?: boolean
    reaction_type?: boolean
    created_at?: boolean
    reviews?: boolean | reviewsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review_reactions"]>

  export type review_reactionsSelectScalar = {
    user_id?: boolean
    review_id?: boolean
    reaction_type?: boolean
    created_at?: boolean
  }

  export type review_reactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "review_id" | "reaction_type" | "created_at", ExtArgs["result"]["review_reactions"]>
  export type review_reactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | reviewsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type review_reactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | reviewsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type review_reactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | reviewsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $review_reactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review_reactions"
    objects: {
      reviews: Prisma.$reviewsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      review_id: number
      reaction_type: string | null
      created_at: Date | null
    }, ExtArgs["result"]["review_reactions"]>
    composites: {}
  }

  type review_reactionsGetPayload<S extends boolean | null | undefined | review_reactionsDefaultArgs> = $Result.GetResult<Prisma.$review_reactionsPayload, S>

  type review_reactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<review_reactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Review_reactionsCountAggregateInputType | true
    }

  export interface review_reactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review_reactions'], meta: { name: 'review_reactions' } }
    /**
     * Find zero or one Review_reactions that matches the filter.
     * @param {review_reactionsFindUniqueArgs} args - Arguments to find a Review_reactions
     * @example
     * // Get one Review_reactions
     * const review_reactions = await prisma.review_reactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends review_reactionsFindUniqueArgs>(args: SelectSubset<T, review_reactionsFindUniqueArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review_reactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {review_reactionsFindUniqueOrThrowArgs} args - Arguments to find a Review_reactions
     * @example
     * // Get one Review_reactions
     * const review_reactions = await prisma.review_reactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends review_reactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, review_reactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review_reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_reactionsFindFirstArgs} args - Arguments to find a Review_reactions
     * @example
     * // Get one Review_reactions
     * const review_reactions = await prisma.review_reactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends review_reactionsFindFirstArgs>(args?: SelectSubset<T, review_reactionsFindFirstArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review_reactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_reactionsFindFirstOrThrowArgs} args - Arguments to find a Review_reactions
     * @example
     * // Get one Review_reactions
     * const review_reactions = await prisma.review_reactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends review_reactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, review_reactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Review_reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_reactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Review_reactions
     * const review_reactions = await prisma.review_reactions.findMany()
     * 
     * // Get first 10 Review_reactions
     * const review_reactions = await prisma.review_reactions.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const review_reactionsWithUser_idOnly = await prisma.review_reactions.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends review_reactionsFindManyArgs>(args?: SelectSubset<T, review_reactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review_reactions.
     * @param {review_reactionsCreateArgs} args - Arguments to create a Review_reactions.
     * @example
     * // Create one Review_reactions
     * const Review_reactions = await prisma.review_reactions.create({
     *   data: {
     *     // ... data to create a Review_reactions
     *   }
     * })
     * 
     */
    create<T extends review_reactionsCreateArgs>(args: SelectSubset<T, review_reactionsCreateArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Review_reactions.
     * @param {review_reactionsCreateManyArgs} args - Arguments to create many Review_reactions.
     * @example
     * // Create many Review_reactions
     * const review_reactions = await prisma.review_reactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends review_reactionsCreateManyArgs>(args?: SelectSubset<T, review_reactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Review_reactions and returns the data saved in the database.
     * @param {review_reactionsCreateManyAndReturnArgs} args - Arguments to create many Review_reactions.
     * @example
     * // Create many Review_reactions
     * const review_reactions = await prisma.review_reactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Review_reactions and only return the `user_id`
     * const review_reactionsWithUser_idOnly = await prisma.review_reactions.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends review_reactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, review_reactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review_reactions.
     * @param {review_reactionsDeleteArgs} args - Arguments to delete one Review_reactions.
     * @example
     * // Delete one Review_reactions
     * const Review_reactions = await prisma.review_reactions.delete({
     *   where: {
     *     // ... filter to delete one Review_reactions
     *   }
     * })
     * 
     */
    delete<T extends review_reactionsDeleteArgs>(args: SelectSubset<T, review_reactionsDeleteArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review_reactions.
     * @param {review_reactionsUpdateArgs} args - Arguments to update one Review_reactions.
     * @example
     * // Update one Review_reactions
     * const review_reactions = await prisma.review_reactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends review_reactionsUpdateArgs>(args: SelectSubset<T, review_reactionsUpdateArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Review_reactions.
     * @param {review_reactionsDeleteManyArgs} args - Arguments to filter Review_reactions to delete.
     * @example
     * // Delete a few Review_reactions
     * const { count } = await prisma.review_reactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends review_reactionsDeleteManyArgs>(args?: SelectSubset<T, review_reactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Review_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_reactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Review_reactions
     * const review_reactions = await prisma.review_reactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends review_reactionsUpdateManyArgs>(args: SelectSubset<T, review_reactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Review_reactions and returns the data updated in the database.
     * @param {review_reactionsUpdateManyAndReturnArgs} args - Arguments to update many Review_reactions.
     * @example
     * // Update many Review_reactions
     * const review_reactions = await prisma.review_reactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Review_reactions and only return the `user_id`
     * const review_reactionsWithUser_idOnly = await prisma.review_reactions.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends review_reactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, review_reactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review_reactions.
     * @param {review_reactionsUpsertArgs} args - Arguments to update or create a Review_reactions.
     * @example
     * // Update or create a Review_reactions
     * const review_reactions = await prisma.review_reactions.upsert({
     *   create: {
     *     // ... data to create a Review_reactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review_reactions we want to update
     *   }
     * })
     */
    upsert<T extends review_reactionsUpsertArgs>(args: SelectSubset<T, review_reactionsUpsertArgs<ExtArgs>>): Prisma__review_reactionsClient<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Review_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_reactionsCountArgs} args - Arguments to filter Review_reactions to count.
     * @example
     * // Count the number of Review_reactions
     * const count = await prisma.review_reactions.count({
     *   where: {
     *     // ... the filter for the Review_reactions we want to count
     *   }
     * })
    **/
    count<T extends review_reactionsCountArgs>(
      args?: Subset<T, review_reactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Review_reactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Review_reactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Review_reactionsAggregateArgs>(args: Subset<T, Review_reactionsAggregateArgs>): Prisma.PrismaPromise<GetReview_reactionsAggregateType<T>>

    /**
     * Group by Review_reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_reactionsGroupByArgs} args - Group by arguments.
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
      T extends review_reactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: review_reactionsGroupByArgs['orderBy'] }
        : { orderBy?: review_reactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, review_reactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReview_reactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review_reactions model
   */
  readonly fields: review_reactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review_reactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__review_reactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends reviewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reviewsDefaultArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the review_reactions model
   */
  interface review_reactionsFieldRefs {
    readonly user_id: FieldRef<"review_reactions", 'Int'>
    readonly review_id: FieldRef<"review_reactions", 'Int'>
    readonly reaction_type: FieldRef<"review_reactions", 'String'>
    readonly created_at: FieldRef<"review_reactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * review_reactions findUnique
   */
  export type review_reactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * Filter, which review_reactions to fetch.
     */
    where: review_reactionsWhereUniqueInput
  }

  /**
   * review_reactions findUniqueOrThrow
   */
  export type review_reactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * Filter, which review_reactions to fetch.
     */
    where: review_reactionsWhereUniqueInput
  }

  /**
   * review_reactions findFirst
   */
  export type review_reactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * Filter, which review_reactions to fetch.
     */
    where?: review_reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_reactions to fetch.
     */
    orderBy?: review_reactionsOrderByWithRelationInput | review_reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for review_reactions.
     */
    cursor?: review_reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of review_reactions.
     */
    distinct?: Review_reactionsScalarFieldEnum | Review_reactionsScalarFieldEnum[]
  }

  /**
   * review_reactions findFirstOrThrow
   */
  export type review_reactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * Filter, which review_reactions to fetch.
     */
    where?: review_reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_reactions to fetch.
     */
    orderBy?: review_reactionsOrderByWithRelationInput | review_reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for review_reactions.
     */
    cursor?: review_reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of review_reactions.
     */
    distinct?: Review_reactionsScalarFieldEnum | Review_reactionsScalarFieldEnum[]
  }

  /**
   * review_reactions findMany
   */
  export type review_reactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * Filter, which review_reactions to fetch.
     */
    where?: review_reactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_reactions to fetch.
     */
    orderBy?: review_reactionsOrderByWithRelationInput | review_reactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing review_reactions.
     */
    cursor?: review_reactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_reactions.
     */
    skip?: number
    distinct?: Review_reactionsScalarFieldEnum | Review_reactionsScalarFieldEnum[]
  }

  /**
   * review_reactions create
   */
  export type review_reactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a review_reactions.
     */
    data: XOR<review_reactionsCreateInput, review_reactionsUncheckedCreateInput>
  }

  /**
   * review_reactions createMany
   */
  export type review_reactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many review_reactions.
     */
    data: review_reactionsCreateManyInput | review_reactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review_reactions createManyAndReturn
   */
  export type review_reactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * The data used to create many review_reactions.
     */
    data: review_reactionsCreateManyInput | review_reactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review_reactions update
   */
  export type review_reactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a review_reactions.
     */
    data: XOR<review_reactionsUpdateInput, review_reactionsUncheckedUpdateInput>
    /**
     * Choose, which review_reactions to update.
     */
    where: review_reactionsWhereUniqueInput
  }

  /**
   * review_reactions updateMany
   */
  export type review_reactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update review_reactions.
     */
    data: XOR<review_reactionsUpdateManyMutationInput, review_reactionsUncheckedUpdateManyInput>
    /**
     * Filter which review_reactions to update
     */
    where?: review_reactionsWhereInput
    /**
     * Limit how many review_reactions to update.
     */
    limit?: number
  }

  /**
   * review_reactions updateManyAndReturn
   */
  export type review_reactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * The data used to update review_reactions.
     */
    data: XOR<review_reactionsUpdateManyMutationInput, review_reactionsUncheckedUpdateManyInput>
    /**
     * Filter which review_reactions to update
     */
    where?: review_reactionsWhereInput
    /**
     * Limit how many review_reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review_reactions upsert
   */
  export type review_reactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the review_reactions to update in case it exists.
     */
    where: review_reactionsWhereUniqueInput
    /**
     * In case the review_reactions found by the `where` argument doesn't exist, create a new review_reactions with this data.
     */
    create: XOR<review_reactionsCreateInput, review_reactionsUncheckedCreateInput>
    /**
     * In case the review_reactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<review_reactionsUpdateInput, review_reactionsUncheckedUpdateInput>
  }

  /**
   * review_reactions delete
   */
  export type review_reactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    /**
     * Filter which review_reactions to delete.
     */
    where: review_reactionsWhereUniqueInput
  }

  /**
   * review_reactions deleteMany
   */
  export type review_reactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review_reactions to delete
     */
    where?: review_reactionsWhereInput
    /**
     * Limit how many review_reactions to delete.
     */
    limit?: number
  }

  /**
   * review_reactions without action
   */
  export type review_reactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    film_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    film_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    film_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    film_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    user_id: number
    film_id: number
    rating: number
    comment: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    user_id?: true
    film_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    user_id?: true
    film_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    user_id?: true
    film_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    user_id?: true
    film_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    user_id?: true
    film_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    user_id: number | null
    film_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    film_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_reactions?: boolean | reviews$review_reactionsArgs<ExtArgs>
    films?: boolean | reviews$filmsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
    _count?: boolean | ReviewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    film_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | reviews$filmsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    film_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | reviews$filmsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    user_id?: boolean
    film_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "film_id" | "rating" | "comment" | "created_at" | "updated_at", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review_reactions?: boolean | reviews$review_reactionsArgs<ExtArgs>
    films?: boolean | reviews$filmsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
    _count?: boolean | ReviewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | reviews$filmsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | reviews$filmsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      review_reactions: Prisma.$review_reactionsPayload<ExtArgs>[]
      films: Prisma.$filmsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      film_id: number | null
      rating: number | null
      comment: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
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
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review_reactions<T extends reviews$review_reactionsArgs<ExtArgs> = {}>(args?: Subset<T, reviews$review_reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    films<T extends reviews$filmsArgs<ExtArgs> = {}>(args?: Subset<T, reviews$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends reviews$usersArgs<ExtArgs> = {}>(args?: Subset<T, reviews$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly user_id: FieldRef<"reviews", 'Int'>
    readonly film_id: FieldRef<"reviews", 'Int'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly comment: FieldRef<"reviews", 'String'>
    readonly created_at: FieldRef<"reviews", 'DateTime'>
    readonly updated_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data?: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews.review_reactions
   */
  export type reviews$review_reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    where?: review_reactionsWhereInput
    orderBy?: review_reactionsOrderByWithRelationInput | review_reactionsOrderByWithRelationInput[]
    cursor?: review_reactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Review_reactionsScalarFieldEnum | Review_reactionsScalarFieldEnum[]
  }

  /**
   * reviews.films
   */
  export type reviews$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * reviews.users
   */
  export type reviews$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model user_films
   */

  export type AggregateUser_films = {
    _count: User_filmsCountAggregateOutputType | null
    _avg: User_filmsAvgAggregateOutputType | null
    _sum: User_filmsSumAggregateOutputType | null
    _min: User_filmsMinAggregateOutputType | null
    _max: User_filmsMaxAggregateOutputType | null
  }

  export type User_filmsAvgAggregateOutputType = {
    user_id: number | null
    film_id: number | null
  }

  export type User_filmsSumAggregateOutputType = {
    user_id: number | null
    film_id: number | null
  }

  export type User_filmsMinAggregateOutputType = {
    user_id: number | null
    film_id: number | null
    list_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_filmsMaxAggregateOutputType = {
    user_id: number | null
    film_id: number | null
    list_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_filmsCountAggregateOutputType = {
    user_id: number
    film_id: number
    list_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_filmsAvgAggregateInputType = {
    user_id?: true
    film_id?: true
  }

  export type User_filmsSumAggregateInputType = {
    user_id?: true
    film_id?: true
  }

  export type User_filmsMinAggregateInputType = {
    user_id?: true
    film_id?: true
    list_status?: true
    created_at?: true
    updated_at?: true
  }

  export type User_filmsMaxAggregateInputType = {
    user_id?: true
    film_id?: true
    list_status?: true
    created_at?: true
    updated_at?: true
  }

  export type User_filmsCountAggregateInputType = {
    user_id?: true
    film_id?: true
    list_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_filmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_films to aggregate.
     */
    where?: user_filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_films to fetch.
     */
    orderBy?: user_filmsOrderByWithRelationInput | user_filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_films
    **/
    _count?: true | User_filmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_filmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_filmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_filmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_filmsMaxAggregateInputType
  }

  export type GetUser_filmsAggregateType<T extends User_filmsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_films]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_films[P]>
      : GetScalarType<T[P], AggregateUser_films[P]>
  }




  export type user_filmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_filmsWhereInput
    orderBy?: user_filmsOrderByWithAggregationInput | user_filmsOrderByWithAggregationInput[]
    by: User_filmsScalarFieldEnum[] | User_filmsScalarFieldEnum
    having?: user_filmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_filmsCountAggregateInputType | true
    _avg?: User_filmsAvgAggregateInputType
    _sum?: User_filmsSumAggregateInputType
    _min?: User_filmsMinAggregateInputType
    _max?: User_filmsMaxAggregateInputType
  }

  export type User_filmsGroupByOutputType = {
    user_id: number
    film_id: number
    list_status: string
    created_at: Date | null
    updated_at: Date | null
    _count: User_filmsCountAggregateOutputType | null
    _avg: User_filmsAvgAggregateOutputType | null
    _sum: User_filmsSumAggregateOutputType | null
    _min: User_filmsMinAggregateOutputType | null
    _max: User_filmsMaxAggregateOutputType | null
  }

  type GetUser_filmsGroupByPayload<T extends user_filmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_filmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_filmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_filmsGroupByOutputType[P]>
            : GetScalarType<T[P], User_filmsGroupByOutputType[P]>
        }
      >
    >


  export type user_filmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    film_id?: boolean
    list_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | filmsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_films"]>

  export type user_filmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    film_id?: boolean
    list_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | filmsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_films"]>

  export type user_filmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    film_id?: boolean
    list_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | filmsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_films"]>

  export type user_filmsSelectScalar = {
    user_id?: boolean
    film_id?: boolean
    list_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_filmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "film_id" | "list_status" | "created_at" | "updated_at", ExtArgs["result"]["user_films"]>
  export type user_filmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | filmsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_filmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | filmsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_filmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | filmsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_filmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_films"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      film_id: number
      list_status: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_films"]>
    composites: {}
  }

  type user_filmsGetPayload<S extends boolean | null | undefined | user_filmsDefaultArgs> = $Result.GetResult<Prisma.$user_filmsPayload, S>

  type user_filmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_filmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_filmsCountAggregateInputType | true
    }

  export interface user_filmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_films'], meta: { name: 'user_films' } }
    /**
     * Find zero or one User_films that matches the filter.
     * @param {user_filmsFindUniqueArgs} args - Arguments to find a User_films
     * @example
     * // Get one User_films
     * const user_films = await prisma.user_films.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_filmsFindUniqueArgs>(args: SelectSubset<T, user_filmsFindUniqueArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_films that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_filmsFindUniqueOrThrowArgs} args - Arguments to find a User_films
     * @example
     * // Get one User_films
     * const user_films = await prisma.user_films.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_filmsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_filmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filmsFindFirstArgs} args - Arguments to find a User_films
     * @example
     * // Get one User_films
     * const user_films = await prisma.user_films.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_filmsFindFirstArgs>(args?: SelectSubset<T, user_filmsFindFirstArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_films that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filmsFindFirstOrThrowArgs} args - Arguments to find a User_films
     * @example
     * // Get one User_films
     * const user_films = await prisma.user_films.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_filmsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_filmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_films
     * const user_films = await prisma.user_films.findMany()
     * 
     * // Get first 10 User_films
     * const user_films = await prisma.user_films.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_filmsWithUser_idOnly = await prisma.user_films.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_filmsFindManyArgs>(args?: SelectSubset<T, user_filmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_films.
     * @param {user_filmsCreateArgs} args - Arguments to create a User_films.
     * @example
     * // Create one User_films
     * const User_films = await prisma.user_films.create({
     *   data: {
     *     // ... data to create a User_films
     *   }
     * })
     * 
     */
    create<T extends user_filmsCreateArgs>(args: SelectSubset<T, user_filmsCreateArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_films.
     * @param {user_filmsCreateManyArgs} args - Arguments to create many User_films.
     * @example
     * // Create many User_films
     * const user_films = await prisma.user_films.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_filmsCreateManyArgs>(args?: SelectSubset<T, user_filmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_films and returns the data saved in the database.
     * @param {user_filmsCreateManyAndReturnArgs} args - Arguments to create many User_films.
     * @example
     * // Create many User_films
     * const user_films = await prisma.user_films.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_films and only return the `user_id`
     * const user_filmsWithUser_idOnly = await prisma.user_films.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_filmsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_filmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_films.
     * @param {user_filmsDeleteArgs} args - Arguments to delete one User_films.
     * @example
     * // Delete one User_films
     * const User_films = await prisma.user_films.delete({
     *   where: {
     *     // ... filter to delete one User_films
     *   }
     * })
     * 
     */
    delete<T extends user_filmsDeleteArgs>(args: SelectSubset<T, user_filmsDeleteArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_films.
     * @param {user_filmsUpdateArgs} args - Arguments to update one User_films.
     * @example
     * // Update one User_films
     * const user_films = await prisma.user_films.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_filmsUpdateArgs>(args: SelectSubset<T, user_filmsUpdateArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_films.
     * @param {user_filmsDeleteManyArgs} args - Arguments to filter User_films to delete.
     * @example
     * // Delete a few User_films
     * const { count } = await prisma.user_films.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_filmsDeleteManyArgs>(args?: SelectSubset<T, user_filmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_films
     * const user_films = await prisma.user_films.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_filmsUpdateManyArgs>(args: SelectSubset<T, user_filmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_films and returns the data updated in the database.
     * @param {user_filmsUpdateManyAndReturnArgs} args - Arguments to update many User_films.
     * @example
     * // Update many User_films
     * const user_films = await prisma.user_films.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_films and only return the `user_id`
     * const user_filmsWithUser_idOnly = await prisma.user_films.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends user_filmsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_filmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_films.
     * @param {user_filmsUpsertArgs} args - Arguments to update or create a User_films.
     * @example
     * // Update or create a User_films
     * const user_films = await prisma.user_films.upsert({
     *   create: {
     *     // ... data to create a User_films
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_films we want to update
     *   }
     * })
     */
    upsert<T extends user_filmsUpsertArgs>(args: SelectSubset<T, user_filmsUpsertArgs<ExtArgs>>): Prisma__user_filmsClient<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filmsCountArgs} args - Arguments to filter User_films to count.
     * @example
     * // Count the number of User_films
     * const count = await prisma.user_films.count({
     *   where: {
     *     // ... the filter for the User_films we want to count
     *   }
     * })
    **/
    count<T extends user_filmsCountArgs>(
      args?: Subset<T, user_filmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_filmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_filmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_filmsAggregateArgs>(args: Subset<T, User_filmsAggregateArgs>): Prisma.PrismaPromise<GetUser_filmsAggregateType<T>>

    /**
     * Group by User_films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_filmsGroupByArgs} args - Group by arguments.
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
      T extends user_filmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_filmsGroupByArgs['orderBy'] }
        : { orderBy?: user_filmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_filmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_filmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_films model
   */
  readonly fields: user_filmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_films.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_filmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends filmsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, filmsDefaultArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_films model
   */
  interface user_filmsFieldRefs {
    readonly user_id: FieldRef<"user_films", 'Int'>
    readonly film_id: FieldRef<"user_films", 'Int'>
    readonly list_status: FieldRef<"user_films", 'String'>
    readonly created_at: FieldRef<"user_films", 'DateTime'>
    readonly updated_at: FieldRef<"user_films", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_films findUnique
   */
  export type user_filmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * Filter, which user_films to fetch.
     */
    where: user_filmsWhereUniqueInput
  }

  /**
   * user_films findUniqueOrThrow
   */
  export type user_filmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * Filter, which user_films to fetch.
     */
    where: user_filmsWhereUniqueInput
  }

  /**
   * user_films findFirst
   */
  export type user_filmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * Filter, which user_films to fetch.
     */
    where?: user_filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_films to fetch.
     */
    orderBy?: user_filmsOrderByWithRelationInput | user_filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_films.
     */
    cursor?: user_filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_films.
     */
    distinct?: User_filmsScalarFieldEnum | User_filmsScalarFieldEnum[]
  }

  /**
   * user_films findFirstOrThrow
   */
  export type user_filmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * Filter, which user_films to fetch.
     */
    where?: user_filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_films to fetch.
     */
    orderBy?: user_filmsOrderByWithRelationInput | user_filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_films.
     */
    cursor?: user_filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_films.
     */
    distinct?: User_filmsScalarFieldEnum | User_filmsScalarFieldEnum[]
  }

  /**
   * user_films findMany
   */
  export type user_filmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * Filter, which user_films to fetch.
     */
    where?: user_filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_films to fetch.
     */
    orderBy?: user_filmsOrderByWithRelationInput | user_filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_films.
     */
    cursor?: user_filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_films.
     */
    skip?: number
    distinct?: User_filmsScalarFieldEnum | User_filmsScalarFieldEnum[]
  }

  /**
   * user_films create
   */
  export type user_filmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_films.
     */
    data: XOR<user_filmsCreateInput, user_filmsUncheckedCreateInput>
  }

  /**
   * user_films createMany
   */
  export type user_filmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_films.
     */
    data: user_filmsCreateManyInput | user_filmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_films createManyAndReturn
   */
  export type user_filmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * The data used to create many user_films.
     */
    data: user_filmsCreateManyInput | user_filmsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_films update
   */
  export type user_filmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_films.
     */
    data: XOR<user_filmsUpdateInput, user_filmsUncheckedUpdateInput>
    /**
     * Choose, which user_films to update.
     */
    where: user_filmsWhereUniqueInput
  }

  /**
   * user_films updateMany
   */
  export type user_filmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_films.
     */
    data: XOR<user_filmsUpdateManyMutationInput, user_filmsUncheckedUpdateManyInput>
    /**
     * Filter which user_films to update
     */
    where?: user_filmsWhereInput
    /**
     * Limit how many user_films to update.
     */
    limit?: number
  }

  /**
   * user_films updateManyAndReturn
   */
  export type user_filmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * The data used to update user_films.
     */
    data: XOR<user_filmsUpdateManyMutationInput, user_filmsUncheckedUpdateManyInput>
    /**
     * Filter which user_films to update
     */
    where?: user_filmsWhereInput
    /**
     * Limit how many user_films to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_films upsert
   */
  export type user_filmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_films to update in case it exists.
     */
    where: user_filmsWhereUniqueInput
    /**
     * In case the user_films found by the `where` argument doesn't exist, create a new user_films with this data.
     */
    create: XOR<user_filmsCreateInput, user_filmsUncheckedCreateInput>
    /**
     * In case the user_films was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_filmsUpdateInput, user_filmsUncheckedUpdateInput>
  }

  /**
   * user_films delete
   */
  export type user_filmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    /**
     * Filter which user_films to delete.
     */
    where: user_filmsWhereUniqueInput
  }

  /**
   * user_films deleteMany
   */
  export type user_filmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_films to delete
     */
    where?: user_filmsWhereInput
    /**
     * Limit how many user_films to delete.
     */
    limit?: number
  }

  /**
   * user_films without action
   */
  export type user_filmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    display_name: string | null
    bio: string | null
    list_visibility: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    display_name: string | null
    bio: string | null
    list_visibility: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    display_name: number
    bio: number
    list_visibility: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    display_name?: true
    bio?: true
    list_visibility?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    display_name?: true
    bio?: true
    list_visibility?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    display_name?: true
    bio?: true
    list_visibility?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: string
    display_name: string | null
    bio: string | null
    list_visibility: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    display_name?: boolean
    bio?: boolean
    list_visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_reactions?: boolean | users$review_reactionsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    user_films?: boolean | users$user_filmsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    display_name?: boolean
    bio?: boolean
    list_visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    display_name?: boolean
    bio?: boolean
    list_visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    display_name?: boolean
    bio?: boolean
    list_visibility?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "display_name" | "bio" | "list_visibility" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review_reactions?: boolean | users$review_reactionsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    user_films?: boolean | users$user_filmsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      review_reactions: Prisma.$review_reactionsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      user_films: Prisma.$user_filmsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: string
      display_name: string | null
      bio: string | null
      list_visibility: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review_reactions<T extends users$review_reactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$review_reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_films<T extends users$user_filmsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_filmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly display_name: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly list_visibility: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.review_reactions
   */
  export type users$review_reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_reactions
     */
    select?: review_reactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_reactions
     */
    omit?: review_reactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_reactionsInclude<ExtArgs> | null
    where?: review_reactionsWhereInput
    orderBy?: review_reactionsOrderByWithRelationInput | review_reactionsOrderByWithRelationInput[]
    cursor?: review_reactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Review_reactionsScalarFieldEnum | Review_reactionsScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.user_films
   */
  export type users$user_filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_films
     */
    select?: user_filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_films
     */
    omit?: user_filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_filmsInclude<ExtArgs> | null
    where?: user_filmsWhereInput
    orderBy?: user_filmsOrderByWithRelationInput | user_filmsOrderByWithRelationInput[]
    cursor?: user_filmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_filmsScalarFieldEnum | User_filmsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Film_genresScalarFieldEnum: {
    film_id: 'film_id',
    genre_id: 'genre_id'
  };

  export type Film_genresScalarFieldEnum = (typeof Film_genresScalarFieldEnum)[keyof typeof Film_genresScalarFieldEnum]


  export const Film_imagesScalarFieldEnum: {
    id: 'id',
    film_id: 'film_id',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type Film_imagesScalarFieldEnum = (typeof Film_imagesScalarFieldEnum)[keyof typeof Film_imagesScalarFieldEnum]


  export const FilmsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    synopsis: 'synopsis',
    status: 'status',
    total_episodes: 'total_episodes',
    release_date: 'release_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FilmsScalarFieldEnum = (typeof FilmsScalarFieldEnum)[keyof typeof FilmsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const Review_reactionsScalarFieldEnum: {
    user_id: 'user_id',
    review_id: 'review_id',
    reaction_type: 'reaction_type',
    created_at: 'created_at'
  };

  export type Review_reactionsScalarFieldEnum = (typeof Review_reactionsScalarFieldEnum)[keyof typeof Review_reactionsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    film_id: 'film_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const User_filmsScalarFieldEnum: {
    user_id: 'user_id',
    film_id: 'film_id',
    list_status: 'list_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_filmsScalarFieldEnum = (typeof User_filmsScalarFieldEnum)[keyof typeof User_filmsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    display_name: 'display_name',
    bio: 'bio',
    list_visibility: 'list_visibility',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export type film_genresWhereInput = {
    AND?: film_genresWhereInput | film_genresWhereInput[]
    OR?: film_genresWhereInput[]
    NOT?: film_genresWhereInput | film_genresWhereInput[]
    film_id?: IntFilter<"film_genres"> | number
    genre_id?: IntFilter<"film_genres"> | number
    films?: XOR<FilmsScalarRelationFilter, filmsWhereInput>
    genres?: XOR<GenresScalarRelationFilter, genresWhereInput>
  }

  export type film_genresOrderByWithRelationInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
    films?: filmsOrderByWithRelationInput
    genres?: genresOrderByWithRelationInput
  }

  export type film_genresWhereUniqueInput = Prisma.AtLeast<{
    film_id_genre_id?: film_genresFilm_idGenre_idCompoundUniqueInput
    AND?: film_genresWhereInput | film_genresWhereInput[]
    OR?: film_genresWhereInput[]
    NOT?: film_genresWhereInput | film_genresWhereInput[]
    film_id?: IntFilter<"film_genres"> | number
    genre_id?: IntFilter<"film_genres"> | number
    films?: XOR<FilmsScalarRelationFilter, filmsWhereInput>
    genres?: XOR<GenresScalarRelationFilter, genresWhereInput>
  }, "film_id_genre_id">

  export type film_genresOrderByWithAggregationInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
    _count?: film_genresCountOrderByAggregateInput
    _avg?: film_genresAvgOrderByAggregateInput
    _max?: film_genresMaxOrderByAggregateInput
    _min?: film_genresMinOrderByAggregateInput
    _sum?: film_genresSumOrderByAggregateInput
  }

  export type film_genresScalarWhereWithAggregatesInput = {
    AND?: film_genresScalarWhereWithAggregatesInput | film_genresScalarWhereWithAggregatesInput[]
    OR?: film_genresScalarWhereWithAggregatesInput[]
    NOT?: film_genresScalarWhereWithAggregatesInput | film_genresScalarWhereWithAggregatesInput[]
    film_id?: IntWithAggregatesFilter<"film_genres"> | number
    genre_id?: IntWithAggregatesFilter<"film_genres"> | number
  }

  export type film_imagesWhereInput = {
    AND?: film_imagesWhereInput | film_imagesWhereInput[]
    OR?: film_imagesWhereInput[]
    NOT?: film_imagesWhereInput | film_imagesWhereInput[]
    id?: IntFilter<"film_images"> | number
    film_id?: IntNullableFilter<"film_images"> | number | null
    image_url?: StringFilter<"film_images"> | string
    created_at?: DateTimeNullableFilter<"film_images"> | Date | string | null
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
  }

  export type film_imagesOrderByWithRelationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    image_url?: SortOrder
    created_at?: SortOrderInput | SortOrder
    films?: filmsOrderByWithRelationInput
  }

  export type film_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: film_imagesWhereInput | film_imagesWhereInput[]
    OR?: film_imagesWhereInput[]
    NOT?: film_imagesWhereInput | film_imagesWhereInput[]
    film_id?: IntNullableFilter<"film_images"> | number | null
    image_url?: StringFilter<"film_images"> | string
    created_at?: DateTimeNullableFilter<"film_images"> | Date | string | null
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
  }, "id">

  export type film_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    image_url?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: film_imagesCountOrderByAggregateInput
    _avg?: film_imagesAvgOrderByAggregateInput
    _max?: film_imagesMaxOrderByAggregateInput
    _min?: film_imagesMinOrderByAggregateInput
    _sum?: film_imagesSumOrderByAggregateInput
  }

  export type film_imagesScalarWhereWithAggregatesInput = {
    AND?: film_imagesScalarWhereWithAggregatesInput | film_imagesScalarWhereWithAggregatesInput[]
    OR?: film_imagesScalarWhereWithAggregatesInput[]
    NOT?: film_imagesScalarWhereWithAggregatesInput | film_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"film_images"> | number
    film_id?: IntNullableWithAggregatesFilter<"film_images"> | number | null
    image_url?: StringWithAggregatesFilter<"film_images"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"film_images"> | Date | string | null
  }

  export type filmsWhereInput = {
    AND?: filmsWhereInput | filmsWhereInput[]
    OR?: filmsWhereInput[]
    NOT?: filmsWhereInput | filmsWhereInput[]
    id?: IntFilter<"films"> | number
    title?: StringFilter<"films"> | string
    synopsis?: StringFilter<"films"> | string
    status?: StringFilter<"films"> | string
    total_episodes?: IntFilter<"films"> | number
    release_date?: DateTimeFilter<"films"> | Date | string
    created_at?: DateTimeNullableFilter<"films"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"films"> | Date | string | null
    film_genres?: Film_genresListRelationFilter
    film_images?: Film_imagesListRelationFilter
    reviews?: ReviewsListRelationFilter
    user_films?: User_filmsListRelationFilter
  }

  export type filmsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    status?: SortOrder
    total_episodes?: SortOrder
    release_date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    film_genres?: film_genresOrderByRelationAggregateInput
    film_images?: film_imagesOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    user_films?: user_filmsOrderByRelationAggregateInput
  }

  export type filmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: filmsWhereInput | filmsWhereInput[]
    OR?: filmsWhereInput[]
    NOT?: filmsWhereInput | filmsWhereInput[]
    title?: StringFilter<"films"> | string
    synopsis?: StringFilter<"films"> | string
    status?: StringFilter<"films"> | string
    total_episodes?: IntFilter<"films"> | number
    release_date?: DateTimeFilter<"films"> | Date | string
    created_at?: DateTimeNullableFilter<"films"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"films"> | Date | string | null
    film_genres?: Film_genresListRelationFilter
    film_images?: Film_imagesListRelationFilter
    reviews?: ReviewsListRelationFilter
    user_films?: User_filmsListRelationFilter
  }, "id">

  export type filmsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    status?: SortOrder
    total_episodes?: SortOrder
    release_date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: filmsCountOrderByAggregateInput
    _avg?: filmsAvgOrderByAggregateInput
    _max?: filmsMaxOrderByAggregateInput
    _min?: filmsMinOrderByAggregateInput
    _sum?: filmsSumOrderByAggregateInput
  }

  export type filmsScalarWhereWithAggregatesInput = {
    AND?: filmsScalarWhereWithAggregatesInput | filmsScalarWhereWithAggregatesInput[]
    OR?: filmsScalarWhereWithAggregatesInput[]
    NOT?: filmsScalarWhereWithAggregatesInput | filmsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"films"> | number
    title?: StringWithAggregatesFilter<"films"> | string
    synopsis?: StringWithAggregatesFilter<"films"> | string
    status?: StringWithAggregatesFilter<"films"> | string
    total_episodes?: IntWithAggregatesFilter<"films"> | number
    release_date?: DateTimeWithAggregatesFilter<"films"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"films"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"films"> | Date | string | null
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    id?: IntFilter<"genres"> | number
    name?: StringFilter<"genres"> | string
    created_at?: DateTimeNullableFilter<"genres"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"genres"> | Date | string | null
    film_genres?: Film_genresListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    film_genres?: film_genresOrderByRelationAggregateInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    created_at?: DateTimeNullableFilter<"genres"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"genres"> | Date | string | null
    film_genres?: Film_genresListRelationFilter
  }, "id" | "name">

  export type genresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"genres"> | number
    name?: StringWithAggregatesFilter<"genres"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"genres"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"genres"> | Date | string | null
  }

  export type review_reactionsWhereInput = {
    AND?: review_reactionsWhereInput | review_reactionsWhereInput[]
    OR?: review_reactionsWhereInput[]
    NOT?: review_reactionsWhereInput | review_reactionsWhereInput[]
    user_id?: IntFilter<"review_reactions"> | number
    review_id?: IntFilter<"review_reactions"> | number
    reaction_type?: StringNullableFilter<"review_reactions"> | string | null
    created_at?: DateTimeNullableFilter<"review_reactions"> | Date | string | null
    reviews?: XOR<ReviewsScalarRelationFilter, reviewsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type review_reactionsOrderByWithRelationInput = {
    user_id?: SortOrder
    review_id?: SortOrder
    reaction_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    reviews?: reviewsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type review_reactionsWhereUniqueInput = Prisma.AtLeast<{
    user_id_review_id?: review_reactionsUser_idReview_idCompoundUniqueInput
    AND?: review_reactionsWhereInput | review_reactionsWhereInput[]
    OR?: review_reactionsWhereInput[]
    NOT?: review_reactionsWhereInput | review_reactionsWhereInput[]
    user_id?: IntFilter<"review_reactions"> | number
    review_id?: IntFilter<"review_reactions"> | number
    reaction_type?: StringNullableFilter<"review_reactions"> | string | null
    created_at?: DateTimeNullableFilter<"review_reactions"> | Date | string | null
    reviews?: XOR<ReviewsScalarRelationFilter, reviewsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_review_id">

  export type review_reactionsOrderByWithAggregationInput = {
    user_id?: SortOrder
    review_id?: SortOrder
    reaction_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: review_reactionsCountOrderByAggregateInput
    _avg?: review_reactionsAvgOrderByAggregateInput
    _max?: review_reactionsMaxOrderByAggregateInput
    _min?: review_reactionsMinOrderByAggregateInput
    _sum?: review_reactionsSumOrderByAggregateInput
  }

  export type review_reactionsScalarWhereWithAggregatesInput = {
    AND?: review_reactionsScalarWhereWithAggregatesInput | review_reactionsScalarWhereWithAggregatesInput[]
    OR?: review_reactionsScalarWhereWithAggregatesInput[]
    NOT?: review_reactionsScalarWhereWithAggregatesInput | review_reactionsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"review_reactions"> | number
    review_id?: IntWithAggregatesFilter<"review_reactions"> | number
    reaction_type?: StringNullableWithAggregatesFilter<"review_reactions"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"review_reactions"> | Date | string | null
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntNullableFilter<"reviews"> | number | null
    film_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntNullableFilter<"reviews"> | number | null
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    review_reactions?: Review_reactionsListRelationFilter
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    film_id?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    review_reactions?: review_reactionsOrderByRelationAggregateInput
    films?: filmsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_film_id?: reviewsUser_idFilm_idCompoundUniqueInput
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    user_id?: IntNullableFilter<"reviews"> | number | null
    film_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntNullableFilter<"reviews"> | number | null
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    review_reactions?: Review_reactionsListRelationFilter
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "user_id_film_id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    film_id?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    user_id?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    film_id?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    rating?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    comment?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null
  }

  export type user_filmsWhereInput = {
    AND?: user_filmsWhereInput | user_filmsWhereInput[]
    OR?: user_filmsWhereInput[]
    NOT?: user_filmsWhereInput | user_filmsWhereInput[]
    user_id?: IntFilter<"user_films"> | number
    film_id?: IntFilter<"user_films"> | number
    list_status?: StringFilter<"user_films"> | string
    created_at?: DateTimeNullableFilter<"user_films"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_films"> | Date | string | null
    films?: XOR<FilmsScalarRelationFilter, filmsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_filmsOrderByWithRelationInput = {
    user_id?: SortOrder
    film_id?: SortOrder
    list_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    films?: filmsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_filmsWhereUniqueInput = Prisma.AtLeast<{
    user_id_film_id?: user_filmsUser_idFilm_idCompoundUniqueInput
    AND?: user_filmsWhereInput | user_filmsWhereInput[]
    OR?: user_filmsWhereInput[]
    NOT?: user_filmsWhereInput | user_filmsWhereInput[]
    user_id?: IntFilter<"user_films"> | number
    film_id?: IntFilter<"user_films"> | number
    list_status?: StringFilter<"user_films"> | string
    created_at?: DateTimeNullableFilter<"user_films"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_films"> | Date | string | null
    films?: XOR<FilmsScalarRelationFilter, filmsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_film_id">

  export type user_filmsOrderByWithAggregationInput = {
    user_id?: SortOrder
    film_id?: SortOrder
    list_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_filmsCountOrderByAggregateInput
    _avg?: user_filmsAvgOrderByAggregateInput
    _max?: user_filmsMaxOrderByAggregateInput
    _min?: user_filmsMinOrderByAggregateInput
    _sum?: user_filmsSumOrderByAggregateInput
  }

  export type user_filmsScalarWhereWithAggregatesInput = {
    AND?: user_filmsScalarWhereWithAggregatesInput | user_filmsScalarWhereWithAggregatesInput[]
    OR?: user_filmsScalarWhereWithAggregatesInput[]
    NOT?: user_filmsScalarWhereWithAggregatesInput | user_filmsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_films"> | number
    film_id?: IntWithAggregatesFilter<"user_films"> | number
    list_status?: StringWithAggregatesFilter<"user_films"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"user_films"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_films"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    display_name?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    list_visibility?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    review_reactions?: Review_reactionsListRelationFilter
    reviews?: ReviewsListRelationFilter
    user_films?: User_filmsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    display_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    list_visibility?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    review_reactions?: review_reactionsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    user_films?: user_filmsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    display_name?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    list_visibility?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    review_reactions?: Review_reactionsListRelationFilter
    reviews?: ReviewsListRelationFilter
    user_films?: User_filmsListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    display_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    list_visibility?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    display_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    list_visibility?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type film_genresCreateInput = {
    films: filmsCreateNestedOneWithoutFilm_genresInput
    genres: genresCreateNestedOneWithoutFilm_genresInput
  }

  export type film_genresUncheckedCreateInput = {
    film_id: number
    genre_id: number
  }

  export type film_genresUpdateInput = {
    films?: filmsUpdateOneRequiredWithoutFilm_genresNestedInput
    genres?: genresUpdateOneRequiredWithoutFilm_genresNestedInput
  }

  export type film_genresUncheckedUpdateInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genresCreateManyInput = {
    film_id: number
    genre_id: number
  }

  export type film_genresUpdateManyMutationInput = {

  }

  export type film_genresUncheckedUpdateManyInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_imagesCreateInput = {
    image_url: string
    created_at?: Date | string | null
    films?: filmsCreateNestedOneWithoutFilm_imagesInput
  }

  export type film_imagesUncheckedCreateInput = {
    id?: number
    film_id?: number | null
    image_url: string
    created_at?: Date | string | null
  }

  export type film_imagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    films?: filmsUpdateOneWithoutFilm_imagesNestedInput
  }

  export type film_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type film_imagesCreateManyInput = {
    id?: number
    film_id?: number | null
    image_url: string
    created_at?: Date | string | null
  }

  export type film_imagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type film_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filmsCreateInput = {
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    film_images?: film_imagesCreateNestedManyWithoutFilmsInput
    reviews?: reviewsCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateInput = {
    id?: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    film_images?: film_imagesUncheckedCreateNestedManyWithoutFilmsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    film_images?: film_imagesUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    film_images?: film_imagesUncheckedUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type filmsCreateManyInput = {
    id?: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type filmsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genresCreateInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type genresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type review_reactionsCreateInput = {
    reaction_type?: string | null
    created_at?: Date | string | null
    reviews: reviewsCreateNestedOneWithoutReview_reactionsInput
    users: usersCreateNestedOneWithoutReview_reactionsInput
  }

  export type review_reactionsUncheckedCreateInput = {
    user_id: number
    review_id: number
    reaction_type?: string | null
    created_at?: Date | string | null
  }

  export type review_reactionsUpdateInput = {
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: reviewsUpdateOneRequiredWithoutReview_reactionsNestedInput
    users?: usersUpdateOneRequiredWithoutReview_reactionsNestedInput
  }

  export type review_reactionsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    review_id?: IntFieldUpdateOperationsInput | number
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type review_reactionsCreateManyInput = {
    user_id: number
    review_id: number
    reaction_type?: string | null
    created_at?: Date | string | null
  }

  export type review_reactionsUpdateManyMutationInput = {
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type review_reactionsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    review_id?: IntFieldUpdateOperationsInput | number
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsCreateInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsCreateNestedManyWithoutReviewsInput
    films?: filmsCreateNestedOneWithoutReviewsInput
    users?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    film_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type reviewsUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUpdateManyWithoutReviewsNestedInput
    films?: filmsUpdateOneWithoutReviewsNestedInput
    users?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type reviewsCreateManyInput = {
    id?: number
    user_id?: number | null
    film_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reviewsUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsCreateInput = {
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    films: filmsCreateNestedOneWithoutUser_filmsInput
    users: usersCreateNestedOneWithoutUser_filmsInput
  }

  export type user_filmsUncheckedCreateInput = {
    user_id: number
    film_id: number
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filmsUpdateInput = {
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    films?: filmsUpdateOneRequiredWithoutUser_filmsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_filmsNestedInput
  }

  export type user_filmsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsCreateManyInput = {
    user_id: number
    film_id: number
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filmsUpdateManyMutationInput = {
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    film_id?: IntFieldUpdateOperationsInput | number
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    user_films?: user_filmsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    user_films?: user_filmsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type FilmsScalarRelationFilter = {
    is?: filmsWhereInput
    isNot?: filmsWhereInput
  }

  export type GenresScalarRelationFilter = {
    is?: genresWhereInput
    isNot?: genresWhereInput
  }

  export type film_genresFilm_idGenre_idCompoundUniqueInput = {
    film_id: number
    genre_id: number
  }

  export type film_genresCountOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genresAvgOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genresMaxOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genresMinOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
  }

  export type film_genresSumOrderByAggregateInput = {
    film_id?: SortOrder
    genre_id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FilmsNullableScalarRelationFilter = {
    is?: filmsWhereInput | null
    isNot?: filmsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type film_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type film_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
  }

  export type film_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type film_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type film_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type Film_genresListRelationFilter = {
    every?: film_genresWhereInput
    some?: film_genresWhereInput
    none?: film_genresWhereInput
  }

  export type Film_imagesListRelationFilter = {
    every?: film_imagesWhereInput
    some?: film_imagesWhereInput
    none?: film_imagesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type User_filmsListRelationFilter = {
    every?: user_filmsWhereInput
    some?: user_filmsWhereInput
    none?: user_filmsWhereInput
  }

  export type film_genresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type film_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_filmsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filmsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    status?: SortOrder
    total_episodes?: SortOrder
    release_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type filmsAvgOrderByAggregateInput = {
    id?: SortOrder
    total_episodes?: SortOrder
  }

  export type filmsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    status?: SortOrder
    total_episodes?: SortOrder
    release_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type filmsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    status?: SortOrder
    total_episodes?: SortOrder
    release_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type filmsSumOrderByAggregateInput = {
    id?: SortOrder
    total_episodes?: SortOrder
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

  export type genresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ReviewsScalarRelationFilter = {
    is?: reviewsWhereInput
    isNot?: reviewsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type review_reactionsUser_idReview_idCompoundUniqueInput = {
    user_id: number
    review_id: number
  }

  export type review_reactionsCountOrderByAggregateInput = {
    user_id?: SortOrder
    review_id?: SortOrder
    reaction_type?: SortOrder
    created_at?: SortOrder
  }

  export type review_reactionsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    review_id?: SortOrder
  }

  export type review_reactionsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    review_id?: SortOrder
    reaction_type?: SortOrder
    created_at?: SortOrder
  }

  export type review_reactionsMinOrderByAggregateInput = {
    user_id?: SortOrder
    review_id?: SortOrder
    reaction_type?: SortOrder
    created_at?: SortOrder
  }

  export type review_reactionsSumOrderByAggregateInput = {
    user_id?: SortOrder
    review_id?: SortOrder
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

  export type Review_reactionsListRelationFilter = {
    every?: review_reactionsWhereInput
    some?: review_reactionsWhereInput
    none?: review_reactionsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type review_reactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsUser_idFilm_idCompoundUniqueInput = {
    user_id: number
    film_id: number
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    film_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    film_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    film_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    film_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    film_id?: SortOrder
    rating?: SortOrder
  }

  export type user_filmsUser_idFilm_idCompoundUniqueInput = {
    user_id: number
    film_id: number
  }

  export type user_filmsCountOrderByAggregateInput = {
    user_id?: SortOrder
    film_id?: SortOrder
    list_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_filmsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    film_id?: SortOrder
  }

  export type user_filmsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    film_id?: SortOrder
    list_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_filmsMinOrderByAggregateInput = {
    user_id?: SortOrder
    film_id?: SortOrder
    list_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_filmsSumOrderByAggregateInput = {
    user_id?: SortOrder
    film_id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    list_visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    list_visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    list_visibility?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type filmsCreateNestedOneWithoutFilm_genresInput = {
    create?: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFilm_genresInput
    connect?: filmsWhereUniqueInput
  }

  export type genresCreateNestedOneWithoutFilm_genresInput = {
    create?: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: genresCreateOrConnectWithoutFilm_genresInput
    connect?: genresWhereUniqueInput
  }

  export type filmsUpdateOneRequiredWithoutFilm_genresNestedInput = {
    create?: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFilm_genresInput
    upsert?: filmsUpsertWithoutFilm_genresInput
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutFilm_genresInput, filmsUpdateWithoutFilm_genresInput>, filmsUncheckedUpdateWithoutFilm_genresInput>
  }

  export type genresUpdateOneRequiredWithoutFilm_genresNestedInput = {
    create?: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: genresCreateOrConnectWithoutFilm_genresInput
    upsert?: genresUpsertWithoutFilm_genresInput
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutFilm_genresInput, genresUpdateWithoutFilm_genresInput>, genresUncheckedUpdateWithoutFilm_genresInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type filmsCreateNestedOneWithoutFilm_imagesInput = {
    create?: XOR<filmsCreateWithoutFilm_imagesInput, filmsUncheckedCreateWithoutFilm_imagesInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFilm_imagesInput
    connect?: filmsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type filmsUpdateOneWithoutFilm_imagesNestedInput = {
    create?: XOR<filmsCreateWithoutFilm_imagesInput, filmsUncheckedCreateWithoutFilm_imagesInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFilm_imagesInput
    upsert?: filmsUpsertWithoutFilm_imagesInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutFilm_imagesInput, filmsUpdateWithoutFilm_imagesInput>, filmsUncheckedUpdateWithoutFilm_imagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type film_genresCreateNestedManyWithoutFilmsInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type film_imagesCreateNestedManyWithoutFilmsInput = {
    create?: XOR<film_imagesCreateWithoutFilmsInput, film_imagesUncheckedCreateWithoutFilmsInput> | film_imagesCreateWithoutFilmsInput[] | film_imagesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_imagesCreateOrConnectWithoutFilmsInput | film_imagesCreateOrConnectWithoutFilmsInput[]
    createMany?: film_imagesCreateManyFilmsInputEnvelope
    connect?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutFilmsInput = {
    create?: XOR<reviewsCreateWithoutFilmsInput, reviewsUncheckedCreateWithoutFilmsInput> | reviewsCreateWithoutFilmsInput[] | reviewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutFilmsInput | reviewsCreateOrConnectWithoutFilmsInput[]
    createMany?: reviewsCreateManyFilmsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type user_filmsCreateNestedManyWithoutFilmsInput = {
    create?: XOR<user_filmsCreateWithoutFilmsInput, user_filmsUncheckedCreateWithoutFilmsInput> | user_filmsCreateWithoutFilmsInput[] | user_filmsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutFilmsInput | user_filmsCreateOrConnectWithoutFilmsInput[]
    createMany?: user_filmsCreateManyFilmsInputEnvelope
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
  }

  export type film_genresUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type film_imagesUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<film_imagesCreateWithoutFilmsInput, film_imagesUncheckedCreateWithoutFilmsInput> | film_imagesCreateWithoutFilmsInput[] | film_imagesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_imagesCreateOrConnectWithoutFilmsInput | film_imagesCreateOrConnectWithoutFilmsInput[]
    createMany?: film_imagesCreateManyFilmsInputEnvelope
    connect?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<reviewsCreateWithoutFilmsInput, reviewsUncheckedCreateWithoutFilmsInput> | reviewsCreateWithoutFilmsInput[] | reviewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutFilmsInput | reviewsCreateOrConnectWithoutFilmsInput[]
    createMany?: reviewsCreateManyFilmsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type user_filmsUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<user_filmsCreateWithoutFilmsInput, user_filmsUncheckedCreateWithoutFilmsInput> | user_filmsCreateWithoutFilmsInput[] | user_filmsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutFilmsInput | user_filmsCreateOrConnectWithoutFilmsInput[]
    createMany?: user_filmsCreateManyFilmsInputEnvelope
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type film_genresUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutFilmsInput | film_genresUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutFilmsInput | film_genresUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutFilmsInput | film_genresUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type film_imagesUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<film_imagesCreateWithoutFilmsInput, film_imagesUncheckedCreateWithoutFilmsInput> | film_imagesCreateWithoutFilmsInput[] | film_imagesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_imagesCreateOrConnectWithoutFilmsInput | film_imagesCreateOrConnectWithoutFilmsInput[]
    upsert?: film_imagesUpsertWithWhereUniqueWithoutFilmsInput | film_imagesUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: film_imagesCreateManyFilmsInputEnvelope
    set?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    disconnect?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    delete?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    connect?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    update?: film_imagesUpdateWithWhereUniqueWithoutFilmsInput | film_imagesUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: film_imagesUpdateManyWithWhereWithoutFilmsInput | film_imagesUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: film_imagesScalarWhereInput | film_imagesScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<reviewsCreateWithoutFilmsInput, reviewsUncheckedCreateWithoutFilmsInput> | reviewsCreateWithoutFilmsInput[] | reviewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutFilmsInput | reviewsCreateOrConnectWithoutFilmsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutFilmsInput | reviewsUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: reviewsCreateManyFilmsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutFilmsInput | reviewsUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutFilmsInput | reviewsUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type user_filmsUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<user_filmsCreateWithoutFilmsInput, user_filmsUncheckedCreateWithoutFilmsInput> | user_filmsCreateWithoutFilmsInput[] | user_filmsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutFilmsInput | user_filmsCreateOrConnectWithoutFilmsInput[]
    upsert?: user_filmsUpsertWithWhereUniqueWithoutFilmsInput | user_filmsUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: user_filmsCreateManyFilmsInputEnvelope
    set?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    disconnect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    delete?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    update?: user_filmsUpdateWithWhereUniqueWithoutFilmsInput | user_filmsUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: user_filmsUpdateManyWithWhereWithoutFilmsInput | user_filmsUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: user_filmsScalarWhereInput | user_filmsScalarWhereInput[]
  }

  export type film_genresUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutFilmsInput | film_genresUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutFilmsInput | film_genresUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutFilmsInput | film_genresUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type film_imagesUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<film_imagesCreateWithoutFilmsInput, film_imagesUncheckedCreateWithoutFilmsInput> | film_imagesCreateWithoutFilmsInput[] | film_imagesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_imagesCreateOrConnectWithoutFilmsInput | film_imagesCreateOrConnectWithoutFilmsInput[]
    upsert?: film_imagesUpsertWithWhereUniqueWithoutFilmsInput | film_imagesUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: film_imagesCreateManyFilmsInputEnvelope
    set?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    disconnect?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    delete?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    connect?: film_imagesWhereUniqueInput | film_imagesWhereUniqueInput[]
    update?: film_imagesUpdateWithWhereUniqueWithoutFilmsInput | film_imagesUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: film_imagesUpdateManyWithWhereWithoutFilmsInput | film_imagesUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: film_imagesScalarWhereInput | film_imagesScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<reviewsCreateWithoutFilmsInput, reviewsUncheckedCreateWithoutFilmsInput> | reviewsCreateWithoutFilmsInput[] | reviewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutFilmsInput | reviewsCreateOrConnectWithoutFilmsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutFilmsInput | reviewsUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: reviewsCreateManyFilmsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutFilmsInput | reviewsUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutFilmsInput | reviewsUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type user_filmsUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<user_filmsCreateWithoutFilmsInput, user_filmsUncheckedCreateWithoutFilmsInput> | user_filmsCreateWithoutFilmsInput[] | user_filmsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutFilmsInput | user_filmsCreateOrConnectWithoutFilmsInput[]
    upsert?: user_filmsUpsertWithWhereUniqueWithoutFilmsInput | user_filmsUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: user_filmsCreateManyFilmsInputEnvelope
    set?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    disconnect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    delete?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    update?: user_filmsUpdateWithWhereUniqueWithoutFilmsInput | user_filmsUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: user_filmsUpdateManyWithWhereWithoutFilmsInput | user_filmsUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: user_filmsScalarWhereInput | user_filmsScalarWhereInput[]
  }

  export type film_genresCreateNestedManyWithoutGenresInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type film_genresUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type film_genresUpdateManyWithoutGenresNestedInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutGenresInput | film_genresUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutGenresInput | film_genresUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutGenresInput | film_genresUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type film_genresUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutGenresInput | film_genresUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutGenresInput | film_genresUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutGenresInput | film_genresUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type reviewsCreateNestedOneWithoutReview_reactionsInput = {
    create?: XOR<reviewsCreateWithoutReview_reactionsInput, reviewsUncheckedCreateWithoutReview_reactionsInput>
    connectOrCreate?: reviewsCreateOrConnectWithoutReview_reactionsInput
    connect?: reviewsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReview_reactionsInput = {
    create?: XOR<usersCreateWithoutReview_reactionsInput, usersUncheckedCreateWithoutReview_reactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReview_reactionsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type reviewsUpdateOneRequiredWithoutReview_reactionsNestedInput = {
    create?: XOR<reviewsCreateWithoutReview_reactionsInput, reviewsUncheckedCreateWithoutReview_reactionsInput>
    connectOrCreate?: reviewsCreateOrConnectWithoutReview_reactionsInput
    upsert?: reviewsUpsertWithoutReview_reactionsInput
    connect?: reviewsWhereUniqueInput
    update?: XOR<XOR<reviewsUpdateToOneWithWhereWithoutReview_reactionsInput, reviewsUpdateWithoutReview_reactionsInput>, reviewsUncheckedUpdateWithoutReview_reactionsInput>
  }

  export type usersUpdateOneRequiredWithoutReview_reactionsNestedInput = {
    create?: XOR<usersCreateWithoutReview_reactionsInput, usersUncheckedCreateWithoutReview_reactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReview_reactionsInput
    upsert?: usersUpsertWithoutReview_reactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReview_reactionsInput, usersUpdateWithoutReview_reactionsInput>, usersUncheckedUpdateWithoutReview_reactionsInput>
  }

  export type review_reactionsCreateNestedManyWithoutReviewsInput = {
    create?: XOR<review_reactionsCreateWithoutReviewsInput, review_reactionsUncheckedCreateWithoutReviewsInput> | review_reactionsCreateWithoutReviewsInput[] | review_reactionsUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutReviewsInput | review_reactionsCreateOrConnectWithoutReviewsInput[]
    createMany?: review_reactionsCreateManyReviewsInputEnvelope
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
  }

  export type filmsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<filmsCreateWithoutReviewsInput, filmsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: filmsCreateOrConnectWithoutReviewsInput
    connect?: filmsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type review_reactionsUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<review_reactionsCreateWithoutReviewsInput, review_reactionsUncheckedCreateWithoutReviewsInput> | review_reactionsCreateWithoutReviewsInput[] | review_reactionsUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutReviewsInput | review_reactionsCreateOrConnectWithoutReviewsInput[]
    createMany?: review_reactionsCreateManyReviewsInputEnvelope
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
  }

  export type review_reactionsUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<review_reactionsCreateWithoutReviewsInput, review_reactionsUncheckedCreateWithoutReviewsInput> | review_reactionsCreateWithoutReviewsInput[] | review_reactionsUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutReviewsInput | review_reactionsCreateOrConnectWithoutReviewsInput[]
    upsert?: review_reactionsUpsertWithWhereUniqueWithoutReviewsInput | review_reactionsUpsertWithWhereUniqueWithoutReviewsInput[]
    createMany?: review_reactionsCreateManyReviewsInputEnvelope
    set?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    disconnect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    delete?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    update?: review_reactionsUpdateWithWhereUniqueWithoutReviewsInput | review_reactionsUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: review_reactionsUpdateManyWithWhereWithoutReviewsInput | review_reactionsUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: review_reactionsScalarWhereInput | review_reactionsScalarWhereInput[]
  }

  export type filmsUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<filmsCreateWithoutReviewsInput, filmsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: filmsCreateOrConnectWithoutReviewsInput
    upsert?: filmsUpsertWithoutReviewsInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutReviewsInput, filmsUpdateWithoutReviewsInput>, filmsUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type review_reactionsUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<review_reactionsCreateWithoutReviewsInput, review_reactionsUncheckedCreateWithoutReviewsInput> | review_reactionsCreateWithoutReviewsInput[] | review_reactionsUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutReviewsInput | review_reactionsCreateOrConnectWithoutReviewsInput[]
    upsert?: review_reactionsUpsertWithWhereUniqueWithoutReviewsInput | review_reactionsUpsertWithWhereUniqueWithoutReviewsInput[]
    createMany?: review_reactionsCreateManyReviewsInputEnvelope
    set?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    disconnect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    delete?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    update?: review_reactionsUpdateWithWhereUniqueWithoutReviewsInput | review_reactionsUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: review_reactionsUpdateManyWithWhereWithoutReviewsInput | review_reactionsUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: review_reactionsScalarWhereInput | review_reactionsScalarWhereInput[]
  }

  export type filmsCreateNestedOneWithoutUser_filmsInput = {
    create?: XOR<filmsCreateWithoutUser_filmsInput, filmsUncheckedCreateWithoutUser_filmsInput>
    connectOrCreate?: filmsCreateOrConnectWithoutUser_filmsInput
    connect?: filmsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_filmsInput = {
    create?: XOR<usersCreateWithoutUser_filmsInput, usersUncheckedCreateWithoutUser_filmsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_filmsInput
    connect?: usersWhereUniqueInput
  }

  export type filmsUpdateOneRequiredWithoutUser_filmsNestedInput = {
    create?: XOR<filmsCreateWithoutUser_filmsInput, filmsUncheckedCreateWithoutUser_filmsInput>
    connectOrCreate?: filmsCreateOrConnectWithoutUser_filmsInput
    upsert?: filmsUpsertWithoutUser_filmsInput
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutUser_filmsInput, filmsUpdateWithoutUser_filmsInput>, filmsUncheckedUpdateWithoutUser_filmsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_filmsNestedInput = {
    create?: XOR<usersCreateWithoutUser_filmsInput, usersUncheckedCreateWithoutUser_filmsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_filmsInput
    upsert?: usersUpsertWithoutUser_filmsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_filmsInput, usersUpdateWithoutUser_filmsInput>, usersUncheckedUpdateWithoutUser_filmsInput>
  }

  export type review_reactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<review_reactionsCreateWithoutUsersInput, review_reactionsUncheckedCreateWithoutUsersInput> | review_reactionsCreateWithoutUsersInput[] | review_reactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutUsersInput | review_reactionsCreateOrConnectWithoutUsersInput[]
    createMany?: review_reactionsCreateManyUsersInputEnvelope
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type user_filmsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_filmsCreateWithoutUsersInput, user_filmsUncheckedCreateWithoutUsersInput> | user_filmsCreateWithoutUsersInput[] | user_filmsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutUsersInput | user_filmsCreateOrConnectWithoutUsersInput[]
    createMany?: user_filmsCreateManyUsersInputEnvelope
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
  }

  export type review_reactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<review_reactionsCreateWithoutUsersInput, review_reactionsUncheckedCreateWithoutUsersInput> | review_reactionsCreateWithoutUsersInput[] | review_reactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutUsersInput | review_reactionsCreateOrConnectWithoutUsersInput[]
    createMany?: review_reactionsCreateManyUsersInputEnvelope
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type user_filmsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_filmsCreateWithoutUsersInput, user_filmsUncheckedCreateWithoutUsersInput> | user_filmsCreateWithoutUsersInput[] | user_filmsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutUsersInput | user_filmsCreateOrConnectWithoutUsersInput[]
    createMany?: user_filmsCreateManyUsersInputEnvelope
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
  }

  export type review_reactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<review_reactionsCreateWithoutUsersInput, review_reactionsUncheckedCreateWithoutUsersInput> | review_reactionsCreateWithoutUsersInput[] | review_reactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutUsersInput | review_reactionsCreateOrConnectWithoutUsersInput[]
    upsert?: review_reactionsUpsertWithWhereUniqueWithoutUsersInput | review_reactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: review_reactionsCreateManyUsersInputEnvelope
    set?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    disconnect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    delete?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    update?: review_reactionsUpdateWithWhereUniqueWithoutUsersInput | review_reactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: review_reactionsUpdateManyWithWhereWithoutUsersInput | review_reactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: review_reactionsScalarWhereInput | review_reactionsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type user_filmsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_filmsCreateWithoutUsersInput, user_filmsUncheckedCreateWithoutUsersInput> | user_filmsCreateWithoutUsersInput[] | user_filmsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutUsersInput | user_filmsCreateOrConnectWithoutUsersInput[]
    upsert?: user_filmsUpsertWithWhereUniqueWithoutUsersInput | user_filmsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_filmsCreateManyUsersInputEnvelope
    set?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    disconnect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    delete?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    update?: user_filmsUpdateWithWhereUniqueWithoutUsersInput | user_filmsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_filmsUpdateManyWithWhereWithoutUsersInput | user_filmsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_filmsScalarWhereInput | user_filmsScalarWhereInput[]
  }

  export type review_reactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<review_reactionsCreateWithoutUsersInput, review_reactionsUncheckedCreateWithoutUsersInput> | review_reactionsCreateWithoutUsersInput[] | review_reactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: review_reactionsCreateOrConnectWithoutUsersInput | review_reactionsCreateOrConnectWithoutUsersInput[]
    upsert?: review_reactionsUpsertWithWhereUniqueWithoutUsersInput | review_reactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: review_reactionsCreateManyUsersInputEnvelope
    set?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    disconnect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    delete?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    connect?: review_reactionsWhereUniqueInput | review_reactionsWhereUniqueInput[]
    update?: review_reactionsUpdateWithWhereUniqueWithoutUsersInput | review_reactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: review_reactionsUpdateManyWithWhereWithoutUsersInput | review_reactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: review_reactionsScalarWhereInput | review_reactionsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type user_filmsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_filmsCreateWithoutUsersInput, user_filmsUncheckedCreateWithoutUsersInput> | user_filmsCreateWithoutUsersInput[] | user_filmsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_filmsCreateOrConnectWithoutUsersInput | user_filmsCreateOrConnectWithoutUsersInput[]
    upsert?: user_filmsUpsertWithWhereUniqueWithoutUsersInput | user_filmsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_filmsCreateManyUsersInputEnvelope
    set?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    disconnect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    delete?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    connect?: user_filmsWhereUniqueInput | user_filmsWhereUniqueInput[]
    update?: user_filmsUpdateWithWhereUniqueWithoutUsersInput | user_filmsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_filmsUpdateManyWithWhereWithoutUsersInput | user_filmsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_filmsScalarWhereInput | user_filmsScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type filmsCreateWithoutFilm_genresInput = {
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_images?: film_imagesCreateNestedManyWithoutFilmsInput
    reviews?: reviewsCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutFilm_genresInput = {
    id?: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_images?: film_imagesUncheckedCreateNestedManyWithoutFilmsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutFilm_genresInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
  }

  export type genresCreateWithoutFilm_genresInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type genresUncheckedCreateWithoutFilm_genresInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type genresCreateOrConnectWithoutFilm_genresInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
  }

  export type filmsUpsertWithoutFilm_genresInput = {
    update: XOR<filmsUpdateWithoutFilm_genresInput, filmsUncheckedUpdateWithoutFilm_genresInput>
    create: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutFilm_genresInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutFilm_genresInput, filmsUncheckedUpdateWithoutFilm_genresInput>
  }

  export type filmsUpdateWithoutFilm_genresInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_images?: film_imagesUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutFilm_genresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_images?: film_imagesUncheckedUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type genresUpsertWithoutFilm_genresInput = {
    update: XOR<genresUpdateWithoutFilm_genresInput, genresUncheckedUpdateWithoutFilm_genresInput>
    create: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutFilm_genresInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutFilm_genresInput, genresUncheckedUpdateWithoutFilm_genresInput>
  }

  export type genresUpdateWithoutFilm_genresInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genresUncheckedUpdateWithoutFilm_genresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filmsCreateWithoutFilm_imagesInput = {
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    reviews?: reviewsCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutFilm_imagesInput = {
    id?: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutFilm_imagesInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutFilm_imagesInput, filmsUncheckedCreateWithoutFilm_imagesInput>
  }

  export type filmsUpsertWithoutFilm_imagesInput = {
    update: XOR<filmsUpdateWithoutFilm_imagesInput, filmsUncheckedUpdateWithoutFilm_imagesInput>
    create: XOR<filmsCreateWithoutFilm_imagesInput, filmsUncheckedCreateWithoutFilm_imagesInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutFilm_imagesInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutFilm_imagesInput, filmsUncheckedUpdateWithoutFilm_imagesInput>
  }

  export type filmsUpdateWithoutFilm_imagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutFilm_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type film_genresCreateWithoutFilmsInput = {
    genres: genresCreateNestedOneWithoutFilm_genresInput
  }

  export type film_genresUncheckedCreateWithoutFilmsInput = {
    genre_id: number
  }

  export type film_genresCreateOrConnectWithoutFilmsInput = {
    where: film_genresWhereUniqueInput
    create: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput>
  }

  export type film_genresCreateManyFilmsInputEnvelope = {
    data: film_genresCreateManyFilmsInput | film_genresCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type film_imagesCreateWithoutFilmsInput = {
    image_url: string
    created_at?: Date | string | null
  }

  export type film_imagesUncheckedCreateWithoutFilmsInput = {
    id?: number
    image_url: string
    created_at?: Date | string | null
  }

  export type film_imagesCreateOrConnectWithoutFilmsInput = {
    where: film_imagesWhereUniqueInput
    create: XOR<film_imagesCreateWithoutFilmsInput, film_imagesUncheckedCreateWithoutFilmsInput>
  }

  export type film_imagesCreateManyFilmsInputEnvelope = {
    data: film_imagesCreateManyFilmsInput | film_imagesCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutFilmsInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsCreateNestedManyWithoutReviewsInput
    users?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutFilmsInput = {
    id?: number
    user_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type reviewsCreateOrConnectWithoutFilmsInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutFilmsInput, reviewsUncheckedCreateWithoutFilmsInput>
  }

  export type reviewsCreateManyFilmsInputEnvelope = {
    data: reviewsCreateManyFilmsInput | reviewsCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type user_filmsCreateWithoutFilmsInput = {
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutUser_filmsInput
  }

  export type user_filmsUncheckedCreateWithoutFilmsInput = {
    user_id: number
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filmsCreateOrConnectWithoutFilmsInput = {
    where: user_filmsWhereUniqueInput
    create: XOR<user_filmsCreateWithoutFilmsInput, user_filmsUncheckedCreateWithoutFilmsInput>
  }

  export type user_filmsCreateManyFilmsInputEnvelope = {
    data: user_filmsCreateManyFilmsInput | user_filmsCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type film_genresUpsertWithWhereUniqueWithoutFilmsInput = {
    where: film_genresWhereUniqueInput
    update: XOR<film_genresUpdateWithoutFilmsInput, film_genresUncheckedUpdateWithoutFilmsInput>
    create: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput>
  }

  export type film_genresUpdateWithWhereUniqueWithoutFilmsInput = {
    where: film_genresWhereUniqueInput
    data: XOR<film_genresUpdateWithoutFilmsInput, film_genresUncheckedUpdateWithoutFilmsInput>
  }

  export type film_genresUpdateManyWithWhereWithoutFilmsInput = {
    where: film_genresScalarWhereInput
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyWithoutFilmsInput>
  }

  export type film_genresScalarWhereInput = {
    AND?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
    OR?: film_genresScalarWhereInput[]
    NOT?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
    film_id?: IntFilter<"film_genres"> | number
    genre_id?: IntFilter<"film_genres"> | number
  }

  export type film_imagesUpsertWithWhereUniqueWithoutFilmsInput = {
    where: film_imagesWhereUniqueInput
    update: XOR<film_imagesUpdateWithoutFilmsInput, film_imagesUncheckedUpdateWithoutFilmsInput>
    create: XOR<film_imagesCreateWithoutFilmsInput, film_imagesUncheckedCreateWithoutFilmsInput>
  }

  export type film_imagesUpdateWithWhereUniqueWithoutFilmsInput = {
    where: film_imagesWhereUniqueInput
    data: XOR<film_imagesUpdateWithoutFilmsInput, film_imagesUncheckedUpdateWithoutFilmsInput>
  }

  export type film_imagesUpdateManyWithWhereWithoutFilmsInput = {
    where: film_imagesScalarWhereInput
    data: XOR<film_imagesUpdateManyMutationInput, film_imagesUncheckedUpdateManyWithoutFilmsInput>
  }

  export type film_imagesScalarWhereInput = {
    AND?: film_imagesScalarWhereInput | film_imagesScalarWhereInput[]
    OR?: film_imagesScalarWhereInput[]
    NOT?: film_imagesScalarWhereInput | film_imagesScalarWhereInput[]
    id?: IntFilter<"film_images"> | number
    film_id?: IntNullableFilter<"film_images"> | number | null
    image_url?: StringFilter<"film_images"> | string
    created_at?: DateTimeNullableFilter<"film_images"> | Date | string | null
  }

  export type reviewsUpsertWithWhereUniqueWithoutFilmsInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutFilmsInput, reviewsUncheckedUpdateWithoutFilmsInput>
    create: XOR<reviewsCreateWithoutFilmsInput, reviewsUncheckedCreateWithoutFilmsInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutFilmsInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutFilmsInput, reviewsUncheckedUpdateWithoutFilmsInput>
  }

  export type reviewsUpdateManyWithWhereWithoutFilmsInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutFilmsInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntNullableFilter<"reviews"> | number | null
    film_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntNullableFilter<"reviews"> | number | null
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
  }

  export type user_filmsUpsertWithWhereUniqueWithoutFilmsInput = {
    where: user_filmsWhereUniqueInput
    update: XOR<user_filmsUpdateWithoutFilmsInput, user_filmsUncheckedUpdateWithoutFilmsInput>
    create: XOR<user_filmsCreateWithoutFilmsInput, user_filmsUncheckedCreateWithoutFilmsInput>
  }

  export type user_filmsUpdateWithWhereUniqueWithoutFilmsInput = {
    where: user_filmsWhereUniqueInput
    data: XOR<user_filmsUpdateWithoutFilmsInput, user_filmsUncheckedUpdateWithoutFilmsInput>
  }

  export type user_filmsUpdateManyWithWhereWithoutFilmsInput = {
    where: user_filmsScalarWhereInput
    data: XOR<user_filmsUpdateManyMutationInput, user_filmsUncheckedUpdateManyWithoutFilmsInput>
  }

  export type user_filmsScalarWhereInput = {
    AND?: user_filmsScalarWhereInput | user_filmsScalarWhereInput[]
    OR?: user_filmsScalarWhereInput[]
    NOT?: user_filmsScalarWhereInput | user_filmsScalarWhereInput[]
    user_id?: IntFilter<"user_films"> | number
    film_id?: IntFilter<"user_films"> | number
    list_status?: StringFilter<"user_films"> | string
    created_at?: DateTimeNullableFilter<"user_films"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_films"> | Date | string | null
  }

  export type film_genresCreateWithoutGenresInput = {
    films: filmsCreateNestedOneWithoutFilm_genresInput
  }

  export type film_genresUncheckedCreateWithoutGenresInput = {
    film_id: number
  }

  export type film_genresCreateOrConnectWithoutGenresInput = {
    where: film_genresWhereUniqueInput
    create: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput>
  }

  export type film_genresCreateManyGenresInputEnvelope = {
    data: film_genresCreateManyGenresInput | film_genresCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type film_genresUpsertWithWhereUniqueWithoutGenresInput = {
    where: film_genresWhereUniqueInput
    update: XOR<film_genresUpdateWithoutGenresInput, film_genresUncheckedUpdateWithoutGenresInput>
    create: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput>
  }

  export type film_genresUpdateWithWhereUniqueWithoutGenresInput = {
    where: film_genresWhereUniqueInput
    data: XOR<film_genresUpdateWithoutGenresInput, film_genresUncheckedUpdateWithoutGenresInput>
  }

  export type film_genresUpdateManyWithWhereWithoutGenresInput = {
    where: film_genresScalarWhereInput
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyWithoutGenresInput>
  }

  export type reviewsCreateWithoutReview_reactionsInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    films?: filmsCreateNestedOneWithoutReviewsInput
    users?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutReview_reactionsInput = {
    id?: number
    user_id?: number | null
    film_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutReview_reactionsInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutReview_reactionsInput, reviewsUncheckedCreateWithoutReview_reactionsInput>
  }

  export type usersCreateWithoutReview_reactionsInput = {
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    user_films?: user_filmsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReview_reactionsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReview_reactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReview_reactionsInput, usersUncheckedCreateWithoutReview_reactionsInput>
  }

  export type reviewsUpsertWithoutReview_reactionsInput = {
    update: XOR<reviewsUpdateWithoutReview_reactionsInput, reviewsUncheckedUpdateWithoutReview_reactionsInput>
    create: XOR<reviewsCreateWithoutReview_reactionsInput, reviewsUncheckedCreateWithoutReview_reactionsInput>
    where?: reviewsWhereInput
  }

  export type reviewsUpdateToOneWithWhereWithoutReview_reactionsInput = {
    where?: reviewsWhereInput
    data: XOR<reviewsUpdateWithoutReview_reactionsInput, reviewsUncheckedUpdateWithoutReview_reactionsInput>
  }

  export type reviewsUpdateWithoutReview_reactionsInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    films?: filmsUpdateOneWithoutReviewsNestedInput
    users?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutReview_reactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutReview_reactionsInput = {
    update: XOR<usersUpdateWithoutReview_reactionsInput, usersUncheckedUpdateWithoutReview_reactionsInput>
    create: XOR<usersCreateWithoutReview_reactionsInput, usersUncheckedCreateWithoutReview_reactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReview_reactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReview_reactionsInput, usersUncheckedUpdateWithoutReview_reactionsInput>
  }

  export type usersUpdateWithoutReview_reactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    user_films?: user_filmsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReview_reactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type review_reactionsCreateWithoutReviewsInput = {
    reaction_type?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutReview_reactionsInput
  }

  export type review_reactionsUncheckedCreateWithoutReviewsInput = {
    user_id: number
    reaction_type?: string | null
    created_at?: Date | string | null
  }

  export type review_reactionsCreateOrConnectWithoutReviewsInput = {
    where: review_reactionsWhereUniqueInput
    create: XOR<review_reactionsCreateWithoutReviewsInput, review_reactionsUncheckedCreateWithoutReviewsInput>
  }

  export type review_reactionsCreateManyReviewsInputEnvelope = {
    data: review_reactionsCreateManyReviewsInput | review_reactionsCreateManyReviewsInput[]
    skipDuplicates?: boolean
  }

  export type filmsCreateWithoutReviewsInput = {
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    film_images?: film_imagesCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    film_images?: film_imagesUncheckedCreateNestedManyWithoutFilmsInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutReviewsInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutReviewsInput, filmsUncheckedCreateWithoutReviewsInput>
  }

  export type usersCreateWithoutReviewsInput = {
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsCreateNestedManyWithoutUsersInput
    user_films?: user_filmsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsUncheckedCreateNestedManyWithoutUsersInput
    user_films?: user_filmsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type review_reactionsUpsertWithWhereUniqueWithoutReviewsInput = {
    where: review_reactionsWhereUniqueInput
    update: XOR<review_reactionsUpdateWithoutReviewsInput, review_reactionsUncheckedUpdateWithoutReviewsInput>
    create: XOR<review_reactionsCreateWithoutReviewsInput, review_reactionsUncheckedCreateWithoutReviewsInput>
  }

  export type review_reactionsUpdateWithWhereUniqueWithoutReviewsInput = {
    where: review_reactionsWhereUniqueInput
    data: XOR<review_reactionsUpdateWithoutReviewsInput, review_reactionsUncheckedUpdateWithoutReviewsInput>
  }

  export type review_reactionsUpdateManyWithWhereWithoutReviewsInput = {
    where: review_reactionsScalarWhereInput
    data: XOR<review_reactionsUpdateManyMutationInput, review_reactionsUncheckedUpdateManyWithoutReviewsInput>
  }

  export type review_reactionsScalarWhereInput = {
    AND?: review_reactionsScalarWhereInput | review_reactionsScalarWhereInput[]
    OR?: review_reactionsScalarWhereInput[]
    NOT?: review_reactionsScalarWhereInput | review_reactionsScalarWhereInput[]
    user_id?: IntFilter<"review_reactions"> | number
    review_id?: IntFilter<"review_reactions"> | number
    reaction_type?: StringNullableFilter<"review_reactions"> | string | null
    created_at?: DateTimeNullableFilter<"review_reactions"> | Date | string | null
  }

  export type filmsUpsertWithoutReviewsInput = {
    update: XOR<filmsUpdateWithoutReviewsInput, filmsUncheckedUpdateWithoutReviewsInput>
    create: XOR<filmsCreateWithoutReviewsInput, filmsUncheckedCreateWithoutReviewsInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutReviewsInput, filmsUncheckedUpdateWithoutReviewsInput>
  }

  export type filmsUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    film_images?: film_imagesUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    film_images?: film_imagesUncheckedUpdateManyWithoutFilmsNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUpdateManyWithoutUsersNestedInput
    user_films?: user_filmsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUncheckedUpdateManyWithoutUsersNestedInput
    user_films?: user_filmsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type filmsCreateWithoutUser_filmsInput = {
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    film_images?: film_imagesCreateNestedManyWithoutFilmsInput
    reviews?: reviewsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutUser_filmsInput = {
    id?: number
    title: string
    synopsis: string
    status: string
    total_episodes: number
    release_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    film_images?: film_imagesUncheckedCreateNestedManyWithoutFilmsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutUser_filmsInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutUser_filmsInput, filmsUncheckedCreateWithoutUser_filmsInput>
  }

  export type usersCreateWithoutUser_filmsInput = {
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_filmsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    display_name?: string | null
    bio?: string | null
    list_visibility?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_filmsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_filmsInput, usersUncheckedCreateWithoutUser_filmsInput>
  }

  export type filmsUpsertWithoutUser_filmsInput = {
    update: XOR<filmsUpdateWithoutUser_filmsInput, filmsUncheckedUpdateWithoutUser_filmsInput>
    create: XOR<filmsCreateWithoutUser_filmsInput, filmsUncheckedCreateWithoutUser_filmsInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutUser_filmsInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutUser_filmsInput, filmsUncheckedUpdateWithoutUser_filmsInput>
  }

  export type filmsUpdateWithoutUser_filmsInput = {
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    film_images?: film_imagesUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutUser_filmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_episodes?: IntFieldUpdateOperationsInput | number
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    film_images?: film_imagesUncheckedUpdateManyWithoutFilmsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type usersUpsertWithoutUser_filmsInput = {
    update: XOR<usersUpdateWithoutUser_filmsInput, usersUncheckedUpdateWithoutUser_filmsInput>
    create: XOR<usersCreateWithoutUser_filmsInput, usersUncheckedCreateWithoutUser_filmsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_filmsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_filmsInput, usersUncheckedUpdateWithoutUser_filmsInput>
  }

  export type usersUpdateWithoutUser_filmsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_filmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    list_visibility?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type review_reactionsCreateWithoutUsersInput = {
    reaction_type?: string | null
    created_at?: Date | string | null
    reviews: reviewsCreateNestedOneWithoutReview_reactionsInput
  }

  export type review_reactionsUncheckedCreateWithoutUsersInput = {
    review_id: number
    reaction_type?: string | null
    created_at?: Date | string | null
  }

  export type review_reactionsCreateOrConnectWithoutUsersInput = {
    where: review_reactionsWhereUniqueInput
    create: XOR<review_reactionsCreateWithoutUsersInput, review_reactionsUncheckedCreateWithoutUsersInput>
  }

  export type review_reactionsCreateManyUsersInputEnvelope = {
    data: review_reactionsCreateManyUsersInput | review_reactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUsersInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsCreateNestedManyWithoutReviewsInput
    films?: filmsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUsersInput = {
    id?: number
    film_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_reactions?: review_reactionsUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type reviewsCreateOrConnectWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsCreateManyUsersInputEnvelope = {
    data: reviewsCreateManyUsersInput | reviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_filmsCreateWithoutUsersInput = {
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    films: filmsCreateNestedOneWithoutUser_filmsInput
  }

  export type user_filmsUncheckedCreateWithoutUsersInput = {
    film_id: number
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filmsCreateOrConnectWithoutUsersInput = {
    where: user_filmsWhereUniqueInput
    create: XOR<user_filmsCreateWithoutUsersInput, user_filmsUncheckedCreateWithoutUsersInput>
  }

  export type user_filmsCreateManyUsersInputEnvelope = {
    data: user_filmsCreateManyUsersInput | user_filmsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type review_reactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: review_reactionsWhereUniqueInput
    update: XOR<review_reactionsUpdateWithoutUsersInput, review_reactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<review_reactionsCreateWithoutUsersInput, review_reactionsUncheckedCreateWithoutUsersInput>
  }

  export type review_reactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: review_reactionsWhereUniqueInput
    data: XOR<review_reactionsUpdateWithoutUsersInput, review_reactionsUncheckedUpdateWithoutUsersInput>
  }

  export type review_reactionsUpdateManyWithWhereWithoutUsersInput = {
    where: review_reactionsScalarWhereInput
    data: XOR<review_reactionsUpdateManyMutationInput, review_reactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_filmsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_filmsWhereUniqueInput
    update: XOR<user_filmsUpdateWithoutUsersInput, user_filmsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_filmsCreateWithoutUsersInput, user_filmsUncheckedCreateWithoutUsersInput>
  }

  export type user_filmsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_filmsWhereUniqueInput
    data: XOR<user_filmsUpdateWithoutUsersInput, user_filmsUncheckedUpdateWithoutUsersInput>
  }

  export type user_filmsUpdateManyWithWhereWithoutUsersInput = {
    where: user_filmsScalarWhereInput
    data: XOR<user_filmsUpdateManyMutationInput, user_filmsUncheckedUpdateManyWithoutUsersInput>
  }

  export type film_genresCreateManyFilmsInput = {
    genre_id: number
  }

  export type film_imagesCreateManyFilmsInput = {
    id?: number
    image_url: string
    created_at?: Date | string | null
  }

  export type reviewsCreateManyFilmsInput = {
    id?: number
    user_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filmsCreateManyFilmsInput = {
    user_id: number
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type film_genresUpdateWithoutFilmsInput = {
    genres?: genresUpdateOneRequiredWithoutFilm_genresNestedInput
  }

  export type film_genresUncheckedUpdateWithoutFilmsInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genresUncheckedUpdateManyWithoutFilmsInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_imagesUpdateWithoutFilmsInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type film_imagesUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type film_imagesUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUpdateWithoutFilmsInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUpdateManyWithoutReviewsNestedInput
    users?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsUpdateWithoutFilmsInput = {
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutUser_filmsNestedInput
  }

  export type user_filmsUncheckedUpdateWithoutFilmsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsUncheckedUpdateManyWithoutFilmsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type film_genresCreateManyGenresInput = {
    film_id: number
  }

  export type film_genresUpdateWithoutGenresInput = {
    films?: filmsUpdateOneRequiredWithoutFilm_genresNestedInput
  }

  export type film_genresUncheckedUpdateWithoutGenresInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_genresUncheckedUpdateManyWithoutGenresInput = {
    film_id?: IntFieldUpdateOperationsInput | number
  }

  export type review_reactionsCreateManyReviewsInput = {
    user_id: number
    reaction_type?: string | null
    created_at?: Date | string | null
  }

  export type review_reactionsUpdateWithoutReviewsInput = {
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutReview_reactionsNestedInput
  }

  export type review_reactionsUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type review_reactionsUncheckedUpdateManyWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type review_reactionsCreateManyUsersInput = {
    review_id: number
    reaction_type?: string | null
    created_at?: Date | string | null
  }

  export type reviewsCreateManyUsersInput = {
    id?: number
    film_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_filmsCreateManyUsersInput = {
    film_id: number
    list_status: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type review_reactionsUpdateWithoutUsersInput = {
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: reviewsUpdateOneRequiredWithoutReview_reactionsNestedInput
  }

  export type review_reactionsUncheckedUpdateWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type review_reactionsUncheckedUpdateManyWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    reaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUpdateWithoutUsersInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUpdateManyWithoutReviewsNestedInput
    films?: filmsUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_reactions?: review_reactionsUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsUpdateWithoutUsersInput = {
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    films?: filmsUpdateOneRequiredWithoutUser_filmsNestedInput
  }

  export type user_filmsUncheckedUpdateWithoutUsersInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_filmsUncheckedUpdateManyWithoutUsersInput = {
    film_id?: IntFieldUpdateOperationsInput | number
    list_status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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